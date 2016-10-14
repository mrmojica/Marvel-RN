import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation, Image, Linking } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Card, Button } from './common';
//we use * as to import all actions from the action file
import * as actions from '../actions';

class ListItem extends Component {
	//when user clicks selected item it will expand fade in animation
	componentWillUpdate() {
		LayoutAnimation.spring();
	}

	renderDescription() {
		// if (this.props.expanded) {
		// 	console.log('matches');
			//flex 1 will wrap the text content inside
			return (
				<Card>
				<CardSection>
					<Text style={{ flex: 1 }}>
					Real Name: {this.props.data.name}
					</Text>
				</CardSection>


				</Card>
			);
		// }
	}

	render() {
		// console.log('actions', actions);
		// console.log('selectCharacter function', this.props);
		// console.log('character id', this.props.character.id);
		// console.log('selected character id', this.props.selectedCharacterId);
		console.log('listitem data', this.props.data);
		return (
			<TouchableWithoutFeedback>

				<View>
					{this.renderDescription()}
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

// const styles = {
// 	titleSize: {
// 		fontSize: 18,
// 		paddingLeft: 15
// 	}
// };

const styles = {
	headerContentStyle: {
		//sets as a list
		flexDirection: 'column',
		//sets spacing
		justifyContent: 'space-around'
	},
	headerTextStyle: {
		fontSize: 18
	},
	thumbnailStyle: {
		height: 50,
		width: 50
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	imageStyle: {
		height: 300,
		//to take full with trick (flex + width)
		flex: 1,
		width: null
	}
};

const mapStateToProps = (state, ownProps) => {
return { characterList: state.characterList };
};

//pass null in first argument if we are not using mapstatetoprops.
//second argument actions to let us dispatch in the component
export default connect(mapStateToProps, actions)(ListItem);

