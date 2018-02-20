import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
<<<<<<< HEAD
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Dashboard from './Dashboard/Dashboard';
import SignIn from './SignIn/SignIn';
=======
import Dashboard from './Dashboard/Dashboard';
>>>>>>> e974df672bad30bd2c4c445b1c4a81b68b5ffc82
import registerServiceWorker from './registerServiceWorker';
import { auth } from './services/firebase';
import { login } from './actions';
import requireAuth from './services/requireAuth';

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
  user: {},
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

<<<<<<< HEAD
=======
ReactDOM.render(<Dashboard />, document.getElementById('root'));
>>>>>>> e974df672bad30bd2c4c445b1c4a81b68b5ffc82
registerServiceWorker();
