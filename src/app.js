import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyBGZwfaxtctp1o1jHQFP5LjsKc7xR6NAUg',
			authDomain: 'auth-9412a.firebaseapp.com',
			databaseURL: 'https://auth-9412a.firebaseio.com',
			projectId: 'auth-9412a',
			storageBucket: 'auth-9412a.appspot.com',
			messagingSenderId: '104719419245'
		});
	}
	
	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				<LoginForm />
			</View>
		);
	}
}

export default App;