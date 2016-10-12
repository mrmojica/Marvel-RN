import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
// import { ListView } from 'react-native';
import api from 'marvel-comics-api';
import * as actions from '../actions/index';
import { Button, Card, CardSection } from './common/Button';

let data; 

class Test extends Component {

	fetchCharacters() {
	return api('characters', {
  publicKey: '77d551b53edb687fab21d294a545a04a',
  privateKey: '82802b5bacb24ed882a4c95a01c2af4fffa04a99',
  timeout: 4000,
  query: {
    limit: 50
  }
}, function(err, body) {
  if (err) throw err
  console.log('body', body);
  // total # of items 
  console.log(body.data.total);
  
  // array of characters 
  console.log(body.data.results);
  data = body.data.results;
  console.log('data',data);
});
}



	// getData() {
	// 	return this.props.dispatch(actions.fetchCharacters());
	// }

	//since we want listview to run the instant our component is about to render
// 	componentWillMount() {
// 		//boilerplate for listview (can find in the docs)
// 		const ds = new ListView.DataSource({
// 			rowHasChanged: (r1, r2) => r1 !== r2
// 		});
// 		//pass the data that you want to be within the listview
// 		this.dataSource = ds.cloneWithRows(this.props.libraries);
// 	}
// //the props library can be named anything, but is used to indicate 
// //how many times we want listItem to duplicate using the value of the renderRow paramter
// 	renderRow(library) {
// 		return <ListItem library={library} />; 
// 	}

	render() {
		console.log(this.props);
		//render the listview
		return (

			<Button onPress={this.fetchCharacters}>
				Test 
			</Button>


		);
	}
}

// const mapStateToProps = state => {
// 	//console.log(state);
// 	return { libraries: state.libraries };
// };

export default connect(null, actions)(Test);
