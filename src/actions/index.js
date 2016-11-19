import 'whatwg-fetch';
import 'isomorphic-fetch';

export const selectCharacter = (marvelId) => {
  return {
    type: 'select_character',
    payload: marvelId
  };
};


export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export function fetchDataSuccess(data) {
	return {
		type: FETCH_DATA_SUCCESS,
		payload: data
	};
}

export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';
export function fetchDataError(error) {
	return {
		type: FETCH_DATA_ERROR,
		error: error
	};
}


