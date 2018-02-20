import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from '../Header/Header';
import { Redirect } from 'react-router-dom';
import requireAuth from '../services/requireAuth';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import './Quiz.css';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    //console.log('props',props.categories[props.match.params.id])
    this.state = {
      num: parseInt(props.match.params.num, 10),
      value: null,
      category: props.categories[props.match.params.id],
      answers: [],
    }
    this.onChange = this.onChange.bind(this);
    this.onNext = this.onNext.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onNext(e) {
    this.setState({
      answers: this.state.answers.concat(this.state.value),
      num: this.state.num + 1,
      value: null,
    });
  }

  onChange(e) {
    this.setState({ value: e.target.value });
  }

  onSubmit(e) {
    //alert(this.state.answers.concat(this.state.value))
    console.log(this.state.answers.concat(this.state.value));
  }

  render() {
    if (!this.state.category) return <Redirect to="/" />;
    const quizzes = this.state.category.quizzes;
    const quiz = quizzes[this.state.num];
   
    return (
      <React.Fragment>

        <Container>

          <Row>
            <Col>
              <Header />
              <h2>Quiz:</h2>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="question">{quiz.question}</div>
              <ul className="answers">
                {quiz.options.map((o, i) => (
                  <li key={i}>
                    <input
                      type="radio"
                      id={i}
                      name="answer"
                      value={i}
                      checked={this.state.value === String(i)}
                      onChange={this.onChange} />
                    <label htmlFor={i}>{o}</label>
                  </li>
                ))}
              </ul>
              {this.state.num < quizzes.length - 1 ?
                <Button onClick={this.onNext}>Next</Button> :
                <Button onClick={this.onSubmit}>Submit</Button>
              }
            </Col>  
          </Row>

        </Container>

      </React.Fragment>
    );
  }
}
Quiz.defaultProps = {
  categories: [],
}

export default requireAuth(connect(
  state => ({
    categories: state.categories,
  })
)(Quiz));
