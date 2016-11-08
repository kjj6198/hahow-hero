export const SEND_PROFILE_REQUEST = 'profile/sendProfileRequest';
export const RECEIVE_PROFILE = 'profile/receiveProfile';

export const REVISE_ABILITY_POINT_REQUEST = 'profile/reviseAbilityPointRequest';
export const REVISE_ABILITY_POINT_SUCCESS = 'profile/reviseAbilityPointSuccess';

export const INCREAMENT = 'profile/increament';
export const DECREAMENT = 'profile/decreament';

import { SEND_REQUEST, REQUEST_COMPLETED, receiveError } from './UIStore.js';
import { setCurrentHeroID } from './hero.js';

const initialState = {
	str: 0,
	int: 0,
	agi: 0,
	luk: 0,
	point: 0
};

export default function reducer(state = initialState, action) {
	switch(action.type) {
		case RECEIVE_PROFILE:
			return Object.assign({}, state, action.payload);
	  case REVISE_ABILITY_POINT_SUCCESS:
	    return Object.assign({}, state, action.payload.ability);
	  case INCREAMENT:
	  	if(state[action.payload.prop]) {
	  		state[action.payload.prop] += 1;
	  	}
	  	return state;
	  case DECREAMENT:
	    if(state[action.payload.prop]) {
	    	state[action.payload.prop] -= 1;
	    }
	    return state;
	  default: 
	    return state;
	}

	return state;
}

export const increament = (prop) => ({ type: INCREAMENT, payload: prop });
export const decreament = (prop) => ({ type: DECREAMENT, payload: prop });

export function reviseAbilityPointRequest(id, ability) {
	const body = JSON.stringify(ability);
  return (dispatch) => {
  	dispatch({ type: SEND_REQUEST });
  	fetch(`https://hahow-recruit.herokuapp.com/heroes/${id}/profile`, {
  		headers: {
  			'Accept': 'application/json',
		    'Content-Type': 'application/json'
  		},
  		method: 'PATCH',
  		body: JSON.stringify(ability)
  	})
  	.then((res) => {
  		if(res.status === 200) { dispatch(reviseAbilityPointSuccess(id, ability)); }
  	})
  	.then(() => dispatch({ type: REQUEST_COMPLETED }))
  	.catch((error) => dispatch(receiveError(error)))
  }
}

export function reviseAbilityPointSuccess(id, ability) {
	return {
		type: REVISE_ABILITY_POINT_SUCCESS,
		payload: {
			id,
			ability
		}
	}
}

export function receiveProfile(profile) {
	return {
		type: RECEIVE_PROFILE,
	  payload: profile
	}
}

export function sendProfileRequest(heroID) {

	return (dispatch) => {
		dispatch({
			type: SEND_REQUEST,
		});
		dispatch(setCurrentHeroID(heroID));

		fetch(`http://hahow-recruit.herokuapp.com/heroes/${heroID}/profile`)
		  .then((res) => res.json())
		  .then((value) => {
		  	dispatch(receiveProfile(value));
		  })
			.then(() => dispatch({ type: REQUEST_COMPLETED }))
	}
}
