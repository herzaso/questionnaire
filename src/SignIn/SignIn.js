// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import { connect } from 'react-redux';

class SignIn extends React.Component {
  // Configure FirebaseUI.
  uiConfig = {
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    signInSuccessUrl: '/'
  };

  render() {
    return (
      <React.Fragment>
        <h1>Login</h1>
        <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    user: state.user,
  })
)(SignIn);
