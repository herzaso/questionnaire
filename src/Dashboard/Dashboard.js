import React from 'react';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
  render() {
    return <h1>Hello {this.props.user.displayName}</h1>
  }
}

export default connect(
  state => ({
    user: state.user,
  })
)(Dashboard)
