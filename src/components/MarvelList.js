import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import ListItem from './ListItem';

// const fetchCharacters = function() {
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
//   this.setState({ characters: [body.data.total]});
// });
// }


class MarvelList extends Component {
// 	state = { characters: [] };

// 	fetchCharacters() {
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
//   this.setState({ characters: [body.data.total]});
// });
// }

	//since we want listview to run the instant our component is about to render
	componentWillMount() {
		//boilerplate for listview (can find in the docs)
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		//pass the data that you want to be within the listview
		this.dataSource = ds.cloneWithRows(this.props.characterList);
	}
//the props character can be named anything, but is used to indicate 
//how many times we want listItem to duplicate using the value of the renderRow paramter
	renderRow(character) {
		return <ListItem character={character} />; 
	}

	render() {
		console.log(this.props);
		//render the listview
		return (
			<ListView
				dataSource={this.dataSource}
				//to tell the listview how to render a specific row
				renderRow={this.renderRow}
			/>
		);
	}
}

const mapStateToProps = state => {
	//console.log(state);
	return { characterList: state.characterList };
};

export default connect(mapStateToProps)(MarvelList);
