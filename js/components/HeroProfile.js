import React from 'react';

import UIVotingButton from '../components/UIVotingButton';

export default class HeroProfile extends React.Component {
  static propTypes = {
    profile: React.PropTypes.object,
  };

  constructor(props) {
    super(props);
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
        	<li><UIVotingButton title="Str" />{str}</li>
        	<li><UIVotingButton title="Int" />{int}</li>
        	<li><UIVotingButton title="Agi" />{agi}</li>
          <li><UIVotingButton title="Luk" />{luk}</li>
          <li>{point}</li>
        </ul>
      </div>
    );
  }
}
