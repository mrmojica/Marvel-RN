import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation, Image, Linking } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Card, Button } from './common';
import * as actions from '../actions';

class ListItem extends Component {
	componentWillUpdate() {
		LayoutAnimation.spring();
	}

	renderDescription() {
		if (this.props.expanded) {
			console.log('matches');
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

				<CardSection>
				<Button onPress={() => Linking.openURL(this.props.character.video)}>
				Video
				</Button>
			</CardSection>

				</Card>
			);
		}
	}

	render() {
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

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
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
		flex: 1,
		width: null
	}
};

const mapStateToProps = (state, ownProps) => {
	const expanded = state.selectedCharacter === ownProps.character.id;

	return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);

