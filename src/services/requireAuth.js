import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

export default function requireAuth(Component) {
  class AuthenticatedComponent extends React.Component {
    componentDidUpdate(nextProps, nextState) {
      if (nextProps.ready !== this.props.ready) this.checkAuth();
    }

    checkAuth() {
      if (!this.props.user) {
        this.props.history.push(`/login`);
      } else {
        this.forceUpdate();
      }
    }

    render() {
      return this.props.ready && this.props.user
        ? <Component { ...this.props } />
        : null;
    }
  }

  return withRouter(connect(
    state => ({
      ready: state.ready,
      user: state.user,
    })
  )(AuthenticatedComponent));
}
