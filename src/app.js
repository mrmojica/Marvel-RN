import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';


const App = () => {
	//we set flex 1 style to view to say we want to take up as much space possible (full height)
	return (
		<Provider store={createStore(reducers)}>
			<View style={{ flex: 1 }}>
				<Header headerText='Marvel App'/>
			</View>
		</Provider>
	);
};

export default App;
