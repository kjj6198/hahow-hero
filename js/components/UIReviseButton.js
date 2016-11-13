import React from 'react';

export default class UIReviseButton extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
    onPlusClick: React.PropTypes.func,
    onMinerClick: React.PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.handlePlusClick  = this.handlePlusClick.bind(this);
    this.handleMinerClick = this.handleMinerClick.bind(this);
  }

  handleMinerClick(e) {
    this.props.onMinerClick.call(null);
  }

  handlePlusClick() {
    this.props.onPlusClick.call(null);
 }

  render() {
    return (
      <div>
        <button onClick={this.handlePlusClick}> + </button>
      	<span>{this.props.name}</span>
        <button onClick={this.handleMinerClick}> - </button>
      </div>
    );
  }
}
