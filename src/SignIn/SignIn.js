// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

// Configure Firebase.
const config = {
    apiKey: "AIzaSyCbQeoowrOrgvphxXMwFivDubHFPvw0D0U",
    authDomain: "mr-sinister.firebaseapp.com",
    databaseURL: "https://mr-sinister.firebaseio.com",
    projectId: "mr-sinister",
    storageBucket: "mr-sinister.appspot.com",
    messagingSenderId: "83324194011"
};
firebase.initializeApp(config);

export default class SignIn extends React.Component {

  // The component's Local state.
  state = {
    signedIn: false // Local signed-in state.
  };

  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccess: () => false
    }
  };

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    firebase.auth().onAuthStateChanged(
        (user) => this.setState({signedIn: !!user})
    );
  }

  render() {
    if (!this.state.signedIn) {
      return (
        <div>
          <h1>My App</h1>
          <p>Please sign-in:</p>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
      );
    }
    return (
      <div>
        <h1>My App</h1>
        <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
        <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
      </div>
    );
  }
}