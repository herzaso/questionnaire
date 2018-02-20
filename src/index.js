import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Dashboard from './Dashboard/Dashboard';
import SignIn from './SignIn/SignIn';
import registerServiceWorker from './registerServiceWorker';
import { auth } from './services/firebase';
import { login } from './actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
        ready: true,
      }
    case 'LOGOUT':
      return {
        ...state,
        user: null,
      }
    default:
      return state;
  }
}

const store = createStore(reducer, {
  ready: false,
  user: null,
});

auth.onAuthStateChanged(user => store.dispatch(login(user)));

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={SignIn} />
        <Route exact path='/' component={Dashboard} />
      </Switch>
    </BrowserRouter>
  </Provider>
  ), document.getElementById('root'));

registerServiceWorker();
