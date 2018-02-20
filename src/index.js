import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Dashboard from './Dashboard/Dashboard';
import SignIn from './SignIn/SignIn';
import Quiz from './Quiz/Quiz';
import registerServiceWorker from './registerServiceWorker';
import { auth } from './services/firebase';
import { login } from './actions';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const reducer = (state = {}, action) => {
  console.log('reducer', action.type, action)
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
    case 'SET_CATEGORIES':
      return {
        ...state,
        categories: action.payload,
      }  
    default:
      return state;
  }
}

const store = createStore(reducer, {
  ready: false,
  user: null,
}
,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

auth.onAuthStateChanged(user => store.dispatch(login(user)));

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={SignIn} />
        <Route exact path='/' component={Dashboard} />
        <Route path='/quiz' component={Quiz} />
      </Switch>
    </BrowserRouter>
  </Provider>
  ), document.getElementById('root'));

registerServiceWorker();
