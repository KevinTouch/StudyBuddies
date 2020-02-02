import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import SlideShow from './SlideShow';
import StudyForm from './StudyForm';

class Content extends Component {
    render() {
      return (
          <Container fluid="true">
            {/*<Row> <SlideShow />  </Row>*/}
            <div style={{padding: '20px'}}>
            <Row>
              <StudyForm/>
            </Row>

            </div>
          </Container>
        );
    }
}

export default Content;