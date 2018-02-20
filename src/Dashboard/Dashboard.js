import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import requireAuth from '../services/requireAuth';
import Header from '../Header/Header';
import Category from '../Category/Category';
import { setCategories } from '../actions';
import {connect} from 'react-redux';
import './dashboard.css';

import { db } from '../services/firebase';

class Dashboard extends React.Component {

  state = {
    categories: []
  }

  componentDidMount() {
    /**
     * Get categories from Firebase
     */
    var dbref = db.ref('/').once('value').then(
      data => {
        const categories = data.val().categories; 
        this.setState({ categories });
        this.props.setCategories(categories)
      }
    );
  }

  render() {
    return (
      <Container>

        <Row>
          <Col>
            <Header />
            <h2>Choose quiz</h2>
          </Col>
        </Row>

        <Row>
          {Object.keys(this.state.categories).map((i) =>
            <Col sm="6" md="4" key={i}>
              <Category content={this.state.categories[i]} key={i} />
            </Col>
          )}
        </Row>

      </Container>
    );
  }
}

export default requireAuth(connect(null, {
  setCategories
})(Dashboard));
