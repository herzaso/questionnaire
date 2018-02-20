import React from 'react';
import { Jumbotron } from 'reactstrap';
import './header.css';

const Header = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Mr.Sinster Trivia</h1>
      </Jumbotron>
    </div>
  );
};

export default Header;