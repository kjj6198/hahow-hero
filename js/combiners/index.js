import { combineReducers } from 'redux';
import hero from './hero.js';
import profile from './profile.js';
import ui from './UIStore.js';

export default combineReducers({
	hero,
	profile,
	ui
});