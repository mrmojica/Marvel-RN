import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, ScrollView } from 'react-native';
import api from 'marvel-comics-api';
import ListItem from './ListItem';


let data;

class MarvelList extends Component {
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
  // data = body.data.results;
  // console.log('data',data);
  // {data.map((item) => {
		// 		return <Text>Hello</Text>
		// 	})}

	 this.setState({ list: body.data.results });
	 data = this.state.list;
	 console.log('data', data);
});
}

	//since we want listview to run the instant our component is about to render
	componentWillMount() {
		{this.fetchCharacterss()}
		//boilerplate for listview (can find in the docs)
		// const ds = new ListView.DataSource({
		// 	rowHasChanged: (r1, r2) => r1 !== r2
		// });
		// //pass the data that you want to be within the listview
		// console.log('this.state.list', this.state.list);
		// this.dataSource = ds.cloneWithRows(data);
	}
//the arguement/attribute character can be named anything, but is used to indicate 
//how many times we want listItem to duplicate using the value of the renderRow paramter
	// renderRow(character) {
	// 	return <ListItem character={character} />; 
	// }

	renderData() {
		return this.state.list.map(index => 
			<ListItem key={index.id} data={index} />
			);
	}

	render() {
		console.log('this.state.list!!!', this.state.list);
		console.log(this.props);
		//render the listview
		return (
			<ScrollView>
			{this.renderData()}
			</ScrollView>
		);
	}
}

const mapStateToProps = state => {
	//console.log(state);
	return { characterList: state.characterList };
};

export default connect(mapStateToProps)(MarvelList);
