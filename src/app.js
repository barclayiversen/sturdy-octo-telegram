import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	state = { loggedIn: null };
	
	componentWillMount() {

		firebase.initializeApp({
			apiKey: 'AIzaSyBGZwfaxtctp1o1jHQFP5LjsKc7xR6NAUg',
			authDomain: 'auth-9412a.firebaseapp.com',
			databaseURL: 'https://auth-9412a.firebaseio.com',
			projectId: 'auth-9412a',
			storageBucket: 'auth-9412a.appspot.com',
			messagingSenderId: '104719419245'
		});
		
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}
	
	renderContent() {
		
		switch (this.state.loggedIn) {
			case true:
				return (
					<Button onPress={() => firebase.auth().signOut()}> 
						Log Out 
					</Button>
				);
			case false:
				return <LoginForm />;
			default:
				return (
					<View><Spinner size="large" /></View>
				);
		}
		if (this.state.loggedIn) {
			return (
				<Button>
					Log out
				</Button>
			);
		}
		
	}
	
	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	}
}


export default App;