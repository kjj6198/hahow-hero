import React from 'react';

export default class HeroProfile extends React.Component {
  static propTypes = {
    profile: React.PropTypes.object,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
      	<li>a</li>
      	<li>a</li>
      	<li>a</li>
      </ul>
    );
  }
}
