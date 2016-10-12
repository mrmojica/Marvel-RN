import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation, Image, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Card } from './common';
//we use * as to import all actions from the action file
import * as actions from '../actions';

class ListItem extends Component {
	//when user clicks selected item it will expand fade in animation
	componentWillUpdate() {
		LayoutAnimation.spring();
	}

	renderDescription() {
		if (this.props.expanded) {
			console.log('matches');
			//flex 1 will wrap the text content inside
			return (
				<Card>
				<CardSection>
					<Text style={{ flex: 1 }}>
					Real Name: {this.props.character.fullName}
					</Text>
				</CardSection>

				<CardSection>
					<Text style={{ flex: 1 }}>
					Race: {this.props.character.race}
					</Text>
				</CardSection>

				<CardSection>
					<Text style={{ flex: 1 }}>
					Powers: {this.props.character.powers}
					</Text>
				</CardSection>

				<CardSection>
					<Text style={{ flex: 1 }}>
					Occupation: {this.props.character.occupation}
					</Text>
				</CardSection>

				<CardSection>
					<Text style={{ flex: 1 }}>
					Type: {this.props.character.category}
					</Text>
				</CardSection>

				</Card>
			);
		}
	}

	render() {
		// console.log('actions', actions);
		// console.log('selectCharacter function', this.props);
		// console.log('character id', this.props.character.id);
		// console.log('selected character id', this.props.selectedCharacterId);

		return (
			<TouchableWithoutFeedback
				onPress={() => this.props.selectCharacter(this.props.character.id)}
			>
				<View>
					<CardSection>
						<View style={styles.thumbnailContainerStyle}>
						<Image 
						source={{ uri: this.props.character.image }}
						style={styles.thumbnailStyle}
						/>
						</View>
						<View style={styles.headerContentStyle}>
						<Text style={{ fontFamily: 'Menlo-BoldItalic' }}>{this.props.character.name}</Text>
						</View>
					</CardSection>
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
	//checks if selected id matches to character id
	const expanded = state.selectedCharacter === ownProps.character.id;

	return { expanded };
};

//pass null in first argument if we are not using mapstatetoprops.
//second argument actions to let us dispatch in the component
export default connect(mapStateToProps, actions)(ListItem);

