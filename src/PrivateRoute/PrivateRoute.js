import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import firebase from 'firebase';

class PrivateRoute extends React.Component {
  render() {
    let rest = Object.assign({}, this.props);
    delete rest.component;
    const Component = this.props.component;
    console.log('1111111111111111', firebase.auth().currentUser)
    return (
      <Route {...rest} render={(props) => (
        firebase.auth().currentUser
          ? <Component {...props} />
          : <Redirect to='/login' />
      )} />
    );
  }
}

export default connect(
  state => ({
    user: state.user,
  })
)(PrivateRoute);
