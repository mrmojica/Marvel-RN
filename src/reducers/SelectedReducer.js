export default (state = null, action) => {
	console.log(action);
	switch (action.type) {
		case 'select_character':
			return action.payload;
		default:
			return state;
	}
};

