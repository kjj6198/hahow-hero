import React from 'react';

import UIReviseButton from '../components/UIReviseButton';

export default class HeroProfile extends React.Component {
  static propTypes = {
    profile: React.PropTypes.object,
    curHeroID: React.PropTypes.string
  };

  constructor(props) {
    super(props);
    this.handleSaveBtnClick = this.handleSaveBtnClick.bind(this);
    this.state = {
      profileList: ['str', 'int', 'agi', 'luk']
    };
  }

  handleSaveBtnClick(e) {
    const { 
      reviseAbilityPointRequest, curHeroID, profile,
      receiveError, 
    } = this.props;
    const { point } = profile;

    if (point !== 0 || point > 0) {
      receiveError('英雄點數必須全部配置完畢才可以儲存！');

      return false;
    }
    reviseAbilityPointRequest(curHeroID, profile);
  }

  render() {
    const {
      str,
      int,
      agi,
      luk,
      point
    } = this.props.profile;
    const { profile } = this.props;
    const { increament, decreament } = this.props;
    const { profileList } = this.state;

    return (
      <div className="hero-profile">
        <h4 style={{textAlign: 'center', marginTop: '0'}}>Profile</h4>
        <ul>
          {profileList.map((skill, index) => {
            return (
              <li key={index}>
                {skill + ' : ' + profile[skill]}
                <UIReviseButton 
                  title={skill}
                  onMinerClick={() => profile[skill] > 0 ? decreament(skill) : 'error'}
                  onPlusClick={() => point > 0 ? increament(skill) : 'error'}
                />                
              </li>
            )
          })}
          <li>Point: {point}</li>
        </ul>
        <button className="btn-primary" onClick={this.handleSaveBtnClick} value="儲存">儲存</button>
      </div>
    );
  }
}
