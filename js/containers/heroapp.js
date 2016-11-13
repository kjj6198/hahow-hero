import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as heroActions from '../combiners/hero.js';
import * as profileActions from '../combiners/profile.js';
import * as UIActions from '../combiners/UIStore.js';

import HeroList from '../components/HeroList.js';
import HeroProfile from '../components/HeroProfile.js';
import ErrorMessage from '../components/ErrorMessage.js';

function filterAction(actions) {
  const result = {};

  Object.keys(actions)
    .filter((key) => !(typeof actions[key] === 'string' || key === 'default'))
    .forEach((key) => result[key] = actions[key])

  return result;
}

class App extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
  }

  componentWillMount() {
    this.props.actions.sendInitHeroRequest();
  }

  render() {
    const { heros } = this.props.hero;
    const { profile } = this.props;
    const { isFetching, error } = this.props.ui;
    return (
      <div>
        { isFetching === true ? <h1>Loading...</h1> : '' }
        <HeroList 
          curHeroID={this.props.hero.currentHeroID}
          heros={heros} 
          actions={this.props.actions}
        />

        <HeroProfile
          profile={profile}
          curHeroID={this.props.hero.currentHeroID}
          {...this.props.actions}
        />
        <ErrorMessage error={error} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  const actions = [
    filterAction(heroActions),
    filterAction(profileActions),
    filterAction(UIActions)
  ];

  const result = {
    ...bindActionCreators(actions[0], dispatch),
    ...bindActionCreators(actions[1], dispatch),
    ...bindActionCreators(actions[2], dispatch)
  };

  return {
    actions: result
  };
  
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);