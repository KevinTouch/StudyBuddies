import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import SlideShow from './SlideShow';
import StudyForm from './StudyForm';

class Content extends Component {
    render() {
      return (
        <div style={{padding: '5px'}}>
          <Container fluid="true">
            <Row> <SlideShow />  </Row>
            <div style={{padding: '20px'}}>
            <Row>
              <StudyForm/>
            </Row>

            </div>
          </Container>
          </div>
        );
    }
}

export default Content;