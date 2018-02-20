import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { auth } from '../services/firebase';
import { logout } from '../actions'
import './header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    auth.signOut();
    this.props.logout();
  }

  render() {
    return (
      <div>
        <div className="header">
          <span>{this.props.user.displayName}</span>
          <Button onClick={this.signOut}>Logout</Button>
        </div>
        <Jumbotron>
          <h1 className="display-3">Mr.Sinster Trivia</h1>
        </Jumbotron>
      </div>
    );
  }
};

export default connect(
  state => ({
    user: state.user,
  }),
  { logout }
)(Header);
