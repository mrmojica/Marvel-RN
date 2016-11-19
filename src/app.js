import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import { Header } from './components/common';
import MarvelList from './components/MarvelList';


const App = () => {
	return (
		<Provider store={store}>
			<View style={{ flex: 1 }}>
				<Header headerText='Superheroes' />
				<MarvelList />
			</View>
		</Provider>
	);
};

export default App;
