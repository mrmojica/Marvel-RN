import { combineReducers } from 'redux';
import CharacterList from './ListReducer';
import SelectedCharacter from './SelectedReducer';


export default combineReducers({
	characterList: CharacterList,
	selectedCharacter: SelectedCharacter
});

