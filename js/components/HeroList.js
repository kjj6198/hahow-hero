import React from 'react';

import HeroCard from './HeroCard.js';

export default class HeroList extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    
  }


  renderHeroCard() {
    const { heros } = this.props;
    const { sendProfileRequest } = this.props.actions;

    return heros
      .map((hero, index) => {
        return <HeroCard
          {...hero}
          key={index}
          handleClick={() => sendProfileRequest(hero.id)}
        />
      });
  }

  render() {
    return (
      <div className="hero-list">
        {this.renderHeroCard()}
      </div>
    );
  }
}
