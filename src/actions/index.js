import 'whatwg-fetch';
import 'isomorphic-fetch';
import api from 'marvel-comics-api';
// var md5 = require('md5');

// const PUBLIC_KEY = '77d551b53edb687fab21d294a545a04a';
// const PRIVATE_KEY = '82802b5bacb24ed882a4c95a01c2af4fffa04a99';
// const ROOT_URL = 'http(s)://gateway.marvel.com/';

// //comc vine key: 3d1cbdafff042704de5a984aa54ed2623a72344a
// const comic_key = '3d1cbdafff042704de5a984aa54ed2623a72344a';
// const comic_url = 'http://comicvine.gamespot.com/api/characters/?api_key=3d1cbdafff042704de5a984aa54ed2623a72344a'




// const LIMIT = 25;

// let ts = Date.now();
// let hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);
// let REQUEST_URL = 'http://gateway.marvel.com:80/v1/public/characters?ts=' + ts + '&apikey=' + PUBLIC_KEY + '&hash=' + hash + '&limit=' + LIMIT;

// export function fetchData() {
// 	console.log('ts', ts);
// 	console.log('hash',hash);
// 	console.log('request url', REQUEST_URL)
//     fetch(REQUEST_URL)
//       .then((response) => response.json())
//       .then((data) => {
//         // this._characters = this._characters.concat(data.data.results);
//         console.log('DATA', data);
//       })
//       .done();
//   }


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

// export const fetchCharacters = function() {
// 	return api('characters', {
//   publicKey: '77d551b53edb687fab21d294a545a04a',
//   privateKey: '82802b5bacb24ed882a4c95a01c2af4fffa04a99',
//   timeout: 4000,
//   query: {
//     limit: 50
//   }
// }, function(err, body) {
//   if (err) throw err
//   console.log('body', body);
//   // total # of items 
//   console.log(body.data.total);
  
//   // array of characters 
//   console.log(body.data.results);
// });
// };

// export const fetchData = function() {
//    return function(dispatch) {
//        var url = comic_url;
//        return fetch(url).then(function(response) {
//            if (response.status < 200 || response.status >= 300) {
//                var error = new Error(response.statusText);
//                error.response = response;
//                throw error;
//            }
//            return response.json();
//        })

//        .then(function(data) {
//                console.log("DATA", data);
//            return dispatch(
//                fetchDataSuccess(data)
//            );
//        })
//        .catch(function(error) {

//            return dispatch(
//                fetchDataSuccess(error)
//            );
//        });
// }
// }
