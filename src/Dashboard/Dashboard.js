import React from 'react';
import { connect } from 'react-redux';

const Dashboard = (props) => <div>Hello {props.user.displayName}</div>;

export default connect(
  state => ({
    user: state.user,
  })
)(Dashboard)
