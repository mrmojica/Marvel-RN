import update from 'react-addons-update';
import { FETCH_CHARACTERS } from '../actions/index';
// import data from './CharacterList.json';

// export default () => data;
// let initialState = {
// 	data: []
// }

export default (state = [], action) => {
	// state = state || initialState;
	// let newState;
	console.log(action);
	switch (action.type) {
		case 'FETCH_CHARACTERS':
		// console.log('fetch characters action hit', action.payload.data);
		// let data = action.payload.data;
		// newState = update(state, {
		// 	data: {$set: action.payload}
		// });
		console.log('action request', action.request);
			return [action.request, ...state];
		case 'FETCH_DATA_SUCCESS':
			return action.payload;
		case 'FETCH_DATA_ERROR':
			return action.error;
		default:
			return state;
	}
};
