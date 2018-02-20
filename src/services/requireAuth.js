import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { auth } from './firebase';

export default function requireAuth(Component) {
  class AuthenticatedComponent extends React.Component {
    componentDidMount() {
      this.checkAuth();
    }

    checkAuth() {
      console.log(auth, auth.currentUser);
      if (!this.props.user) {
        console.log(this.props);
        const location = this.props.location;
        const redirect = location.pathname + location.search;

        this.props.history.push(`/login?redirect=${redirect}`);
      }
    }

    render() {
      return this.props.user
        ? <Component { ...this.props } />
        : null;
    }
  }

  return withRouter(connect(
    state => ({
      user: state.user,
    })
  )(AuthenticatedComponent));
}
