import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <Container>
        <Header/>
        <Row>
          <Col>
        <h1>Hello, world!</h1>
          <Button color="danger">Danger!</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
