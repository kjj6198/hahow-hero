import React from 'react';
import { Link } from 'react-router';
export default class HeroCard extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
    image: React.PropTypes.string,
    id: React.PropTypes.string,
    handleClick: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.handleClick.call(null, this.props.id);
  }

  render() {
    return (
      <div className="hero-card">
        <img 
          src={this.props.image}
          className="hero-card__image"
        />
        
      	<h3 onClick={this.handleClick} className="hero-card__name">
          {this.props.name}
        </h3>
        
      </div>
    );
  }
}
