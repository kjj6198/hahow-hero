import React from 'react';

export default class UIVotingButton extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
			<div>
			  <button>+</button>
			  <span>{this.props.title}</span>
			  <button>-</button>
			</div>      
    );
  }
}
