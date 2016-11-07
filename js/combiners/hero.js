export const RECEIVE_INIT_HEROS       = 'hero/receiveInitHeros';
export const RECEIVE_HERO_DETAIL      = 'hero/receiveHeroDetail';

export const RECEIVE_RESULT_ERROR     = 'hero/receiveResultError';
export const SET_CURRENT_HERO_ID = 'hero/setCurrentHeroID';

import { SEND_REQUEST, REQUEST_COMPLETED } from './UIStore.js';

const initalState = {
	currentHeroID: '',
	heros: [],
};

export default function reducer(state = initalState, action) {

	// clear error if there is no error occur.
	if (action !== RECEIVE_RESULT_ERROR) { state.error === ''; }
	switch(action.type) {
		case RECEIVE_INIT_HEROS:
		  return Object.assign({}, state, {
		  	isFetching: false,
		  	heros: action.payload.heros 
		  });
		case RECEIVE_HERO_DETAIL:
		  return Object.assign({}, state, {
		  	currentHero: action.payload.hero
		  });
		case RECEIVE_RESULT_ERROR:
		  return Object.assign({}, state, { error: action.payload.error });

		case SET_CURRENT_HERO_ID:
		  return Object.assign({}, state, { currentHeroID: action.heroID })
		default:
		  return state;
	}

	return state;
}

export function setCurrentHeroID(heroID) {
	return {
		type: SET_CURRENT_HERO_ID,
		heroID
	}
}

export function sendInitHeroRequest(url = 'http://hahow-recruit.herokuapp.com/heroes') {
	return (dispatch) => {
		dispatch({
			type: SEND_REQUEST
		});

		fetch(url)
		  .then((res) => res.json())
		  .then((value) => dispatch({
		  	type: RECEIVE_INIT_HEROS,
		  	payload: { heros: value }
		  }))
		  .then(() => dispatch({ type: REQUEST_COMPLETED }))
	}	
}

export function sendHeroDetailRequest(id) {
	const url = 'http://hahow-recruit.herokuapp.com/heroes/' + id;
	return (dispatch) => {
		dispatch({
			type: SEND_REQUEST,
		});

		fetch(url)
		  .then((res) => res.json())
		  .then((value) => dispatch({
		  	type: RECEIVE_HERO_DETAIL,
		  	payload: { hero: value }
		  }))
		  .then(() => dispatch({ type: REQUEST_COMPLETED }))
		  .catch((error) => receiveResultError(error));
	}
}


/**
 * [receive error message if backend return error message or status code]
 * @param  {String} error [The error message the server provide]
 * @return {Object}    [Redux action creator]
 */
export function receiveResultError(error) {
	return {
		type: RECEIVE_RESULT_ERROR,
		payload: error
	}
}

