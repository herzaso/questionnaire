import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';

import Header from '../Header/Header';

export default class Quiz extends React.Component {

  render() {

    return (
      <Container>

        <Row>
          <Col>
            <Header />
            <h2>Quiz</h2>
          </Col>
        </Row>

        <Row>
            <Col>
                sss
            </Col>
        </Row>

      </Container>
    );
  }
}
