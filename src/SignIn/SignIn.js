// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import { auth } from '../services/firebase';
import { connect } from 'react-redux';

const uiConfig = {
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ],
  signInSuccessUrl: '/'
};

class SignIn extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Login</h1>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    user: state.user,
  })
)(SignIn);
