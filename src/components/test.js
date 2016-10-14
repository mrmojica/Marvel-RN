import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import axios from 'axios'
import md5 from 'md5';
// import { ListView } from 'react-native';
import api from 'marvel-comics-api';
import * as actions from '../actions/index';
import { Button, Card, CardSection } from './common/Button';

let data; 

class Test extends Component {
	constructor(props){
		super(props);

		
		this.state = {
			list: []
		};
		//binding the function to fix "this.setState not a function"
	this.fetchCharacterss = this.fetchCharacterss.bind(this);
	}

	// state = { list: [] };

		fetchCharacterss() {
	return api('characters', {
  publicKey: '77d551b53edb687fab21d294a545a04a',
  privateKey: '82802b5bacb24ed882a4c95a01c2af4fffa04a99',
  timeout: 4000,
  query: {
    limit: 50
  }
  // changed callback to a arrow function to fix "this.setState not a function"
  //arrow functions binds your context for you and the syntax
}, (err, body) => {
  if (err) throw err
  console.log('body', body);
  // total # of items 
  console.log(body.data.total);
  
  // array of characters 
  console.log(body.data.results);
  data = body.data.results;
  console.log('data',data);
  // {data.map((item) => {
		// 		return <Text>Hello</Text>
		// 	})}

	 this.setState({ list: body.data.results });

});
}

	componentWillMount() {
		// const PUBLIC_KEY = '77d551b53edb687fab21d294a545a04a';
		// const PRIVATE_KEY = '82802b5bacb24ed882a4c95a01c2af4fffa04a99';
		// let ts = Date.now();
		// let hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);
		// let url = 'http://gateway.marvel.com/v1/public/characters';
		// let urlBase = `${url}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`;
	 //    request = axios.get(urlBase);
	 //    console.log('url', urlBase);
	 // this.props.fetchCharacters();
	 {this.fetchCharacterss()}
	 // this.setState({ list: data });
	}






	// getData() {
	// 	return this.props.dispatch(actions.fetchCharacters());
	// }

	//since we want listview to run the instant our component is about to render
// 	componentWillMount() {
// // 		//boilerplate for listview (can find in the docs)
// // 		const ds = new ListView.DataSource({
// // 			rowHasChanged: (r1, r2) => r1 !== r2
// // 		});
// // 		//pass the data that you want to be within the listview
// // 		this.dataSource = ds.cloneWithRows();
// 		this.props.fetchCharacters
// 	}

// <Component key={index} {...item} />

	render() {
		console.log('list', this.state.list);
		// console.log('new data', data);
		console.log('actions', this.props);
		// console.log('characterlist from api', this.state.characterList);
		// console.log('request', request);
		//render the listview
		// {this.fetchCharacters.bind(this)}
		return (
			
			
			<Button onPress={this.fetchCharacters}>
				Test 
			</Button>


		);
	}
}

const mapStateToProps = state => {
	//console.log(state);
	return { characterList: state.characterList };
};

export default connect(mapStateToProps, actions)(Test);
