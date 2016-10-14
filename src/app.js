import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import { Header } from './components/common';
// import Test from './components/test';
import MarvelList from './components/MarvelList';


const App = () => {
	//we set flex 1 style to view to take up as much space possible (full height/fix scroll)
	return (
		<Provider store={store}>
			<View>
				<Header headerText='Superheroes' />
				<MarvelList />
			</View>
		</Provider>
	);
};

export default App;
