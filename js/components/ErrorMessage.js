import React from 'react';

export default class ErrorMessage extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="error">{this.props.error}</div>
    );
  }
}
