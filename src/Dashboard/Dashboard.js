import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';

import Header from '../Header/Header';
import Category from '../Category/Category';
import './dashboard.css';

export default class Dashboard extends React.Component {

  state = {
    categories: []
  }

  componentDidMount() {
    axios.get(`https://us-central1-mr-sinister.cloudfunctions.net/quizes`)
      .then(res => {
        console.log("res.data", res.data)
        const categories = res.data;
        this.setState({ categories });
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
            <Col sm="6" md="4">
              <Category content={data} key={i} />
            </Col>
          )}
        </Row>

      </Container>
    );
  }
}
