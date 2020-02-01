import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class NavBar extends Component {
    render() {
        return (
            <Container fluid="true">
                <Row>
                    <Col> StudyBuddy </Col>
                    <Col> Explore </Col>
                    <Col> Message </Col>
                    <Col> Notification </Col>
                    <Col> Profile </Col>
                </Row>
            </Container>
        );
  }
}

export default NavBar;