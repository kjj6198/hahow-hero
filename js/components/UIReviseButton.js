import React from 'react';

export default class UIReviseButton extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
    onPlusClick: React.PropTypes.func,
    onMinerClick: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	
      	<span>{this.props.title}</span>
   
      </div>
    );
  }
}
