import React from 'react';

import HeroCard from './HeroCard.js';

export default class HeroList extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    
  }

  renderHeroCard() {
    const { heros, curHeroID } = this.props;
    const { sendProfileRequest } = this.props.actions;

    return heros
      .map((hero, index) => {
        return <HeroCard
          {...hero}
          active={ curHeroID === hero.id ? true : false }
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
