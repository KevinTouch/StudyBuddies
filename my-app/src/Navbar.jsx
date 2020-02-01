import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Card from 'react-bootstrap/Card'

class NavBar extends Component {
    render() {
        return (
            <Container fluid="true">
                <Row>
                    <Col> 
                        <Card border='primary'>
                          <Card.Body>
                              Study Buddy
                          </Card.Body>
                        </Card>                    
                    </Col>
                    <Col> 
                        <Card border='primary'>
                          <Card.Body>
                              Explore
                          </Card.Body>
                        </Card>    
                    </Col>
                    <Col> 
                        <Card border='primary'>
                          <Card.Body>
                              Message
                          </Card.Body>
                        </Card>     
                    </Col>
                    <Col> 
                        <Card border='primary'>
                          <Card.Body>
                              Notification
                          </Card.Body>
                        </Card>     
                    </Col>
                    <Col> 
                        <Card border='primary'>
                          <Card.Body>
                              Profile
                          </Card.Body>
                        </Card>     
                    </Col>
                </Row>
            </Container>
        );
  }
}

export default NavBar;