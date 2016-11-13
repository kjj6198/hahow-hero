import React from 'react';
import { Link } from 'react-router';
export default class HeroCard extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
    image: React.PropTypes.string,
    id: React.PropTypes.string,
    handleClick: React.PropTypes.func,
    active: React.PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { active } = this.props;
    if (active) {
      // just return if the hero is selected
      return false;
    }

    this.props.handleClick.call(null, this.props.id);
  }

  render() {
    const { active } = this.props;
    return (
      <div className={'hero-card' + (active === true ? ' is-selected' : '')} onClick={this.handleClick}>
        <img 
          src={this.props.image}
          className="hero-card__image"
        />
        
      	<h3 onClick={this.handleClick} className="hero-card__name">
          {active === true ? <strong style={{color: '#27cc95'}}>{this.props.name}</strong> : this.props.name}
        </h3>
        
      </div>
    );
  }
}
