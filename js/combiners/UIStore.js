export const SEND_REQUEST = 'ui/sendRequest';
export const REQUEST_COMPLETED = 'ui/requestCompleted';
export const RECEIVE_ERROR = 'ui/receiveError';

const defaultState = {
	isFetching: false,
	error: '',
};

export default function reducer(state = defaultState, action) {
	switch(action.type) {
		case SEND_REQUEST:
		  return Object.assign({}, state, { isFetching: true });
		case REQUEST_COMPLETED:
		  return Object.assign({}, state, { isFetching: false });
		case RECEIVE_ERROR:
		  return Object.assign({}, state, { error: action.error });
		default:
			state.error = '';
		  return state;
	}
}

export const sendRequest = () => ({ type: SEND_REQUEST });
export const requestCompleted = () => ({ type: REQUEST_COMPLETED });
export const receiveError = (error) => ({ type: RECEIVE_ERROR, error });