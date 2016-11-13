import React from 'react';

import HeroCard from './HeroCard.js';

export default class HeroList extends React.Component {

  constructor(props) {
    super(props);
  }

  isEmpty() {
    return this.props.heros.length === 0 ? true : false;
  }
  renderHeroCard() {
    const { heros, curHeroID } = this.props;
    const { sendProfileRequest } = this.props.actions;
    

    if (this.isEmpty()) {
      return (
        <div className="fake-card">
          <div className="fake-card__image"></div>
          <div className="fake-card__title"></div>

        </div>
      )
    }

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
    const isEmpty = this.isEmpty();
    return (
      <div className={'hero-list' +  (isEmpty === true ? ' is-empty' : '')}>
        {this.renderHeroCard()}
      </div>
    );
  }
}
