import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import ListItem from './ListItem';


class MarvelList extends Component {

	componentWillMount() {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		this.dataSource = ds.cloneWithRows(this.props.characterList);
	}
	renderRow(character) {
		return <ListItem character={character} />; 
	}

	render() {
		console.log(this.props);
		return (
			<ListView
				dataSource={this.dataSource}
				renderRow={this.renderRow}
			/>
		);
	}
}

const mapStateToProps = state => {
	return { characterList: state.characterList };
};

export default connect(mapStateToProps)(MarvelList);
