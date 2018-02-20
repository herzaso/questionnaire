import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Dashboard from './Dashboard/Dashboard';
import SignIn from './SignIn/SignIn';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';
import { login } from './actions'

const reducer = (state = {}, action) => {
  console.log('reducer', action)
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
      }
    default:
      return state;
  }
}

const store = createStore(reducer, {
  user: null,
});

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
firebase.auth().onAuthStateChanged(user => store.dispatch(login(user)));

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path='/' component={Dashboard} />
        <Route path='/login' component={SignIn} />
      </Switch>
    </BrowserRouter>
  </Provider>
  ), document.getElementById('root'));

registerServiceWorker();
