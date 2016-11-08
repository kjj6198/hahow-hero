import React from 'react';

import UIReviseButton from '../components/UIReviseButton';

export default class HeroProfile extends React.Component {
  static propTypes = {
    profile: React.PropTypes.object,
    curHeroID: React.PropTypes.string
  };

  constructor(props) {
    super(props);
    this.handleSaveBtnClick = this.handleSaveBtnClick.bind(this);
  }

  componentDidUpdate() {
    
  }

  handleSaveBtnClick(e) {
    const { reviseAbilityPointRequest, curHeroID } = this.props;
    reviseAbilityPointRequest(curHeroID, this.props.profile);
  }

  onPlusClick(e) {

  }

  onMinerClick(e) {

  }

  render() {
    const {
      str,
      int,
      agi,
      luk,
      point
    } = this.props.profile
    return (
      <div className="hero-profile">
        <ul>
        	<li>
            <UIReviseButton title="Str"
              onPlusClick={this.onPlusClick.bind(this)}
              onMinerClick={this}
            />
            {str}
          </li>
        	<li>
            <UIReviseButton title="Int" />{int}
          </li>
        	<li>
            <UIReviseButton title="Agi" />{agi}
          </li>
          <li>
            <UIReviseButton title="Luk" />{luk}
          </li>
          <li>Point: {point}</li>
        </ul>
        <button onClick={this.handleSaveBtnClick} value="儲存">儲存</button>
      </div>
    );
  }
}
