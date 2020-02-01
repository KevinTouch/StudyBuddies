import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import SlideShow from './SlideShow';
import StudyForm from './StudyForm';

class Content extends Component {
    render() {
      return (
          <Container>
            <Row>
              <Col>
                <SlideShow />
              </Col>
            </Row>    
            
            <Row>
              <StudyForm/>
            </Row>

          </Container>
        );
    }
}

export default Content;