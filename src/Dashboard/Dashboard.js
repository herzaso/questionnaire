import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import requireAuth from '../services/requireAuth';
import Header from '../Header/Header';
import Category from '../Category/Category';
import { setCategories } from '../actions';
import {connect} from 'react-redux';
import './dashboard.css';

class Dashboard extends React.Component {

  state = {
    categories: []
  }

  componentDidMount() {
    /**
     * Get categories
     */
    axios.get(`https://us-central1-mr-sinister.cloudfunctions.net/quizes`)
      .then(res => {
        const categories = res.data;
        this.setState({ categories });
        this.props.setCategories(categories)
      })
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
          {this.state.categories.map((data, i) =>
            <Col sm="6" md="4" key={i}>
              <Category content={data} key={i} />
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
