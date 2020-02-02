import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import './App.css';
 


class NavBar extends Component {
    render() {
        return (
            <div>
            <br></br>
            <Container fluid="true">
                <Navbar bg="primary" variant="dark">
                <Image src={require('./imgs/logo.png')} />       

                <Navbar.Brand href="#home"><h2>NavBar</h2></Navbar.Brand>
                <Nav className="mr-auto"  >

                <Nav.Link href="#home"><h2>Home</h2></Nav.Link>
                <Nav.Link href="#features"><h2>Features</h2></Nav.Link>
                <Nav.Link href="#pricing"><h2>Pricing</h2></Nav.Link>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
                </Form>
                </Navbar>

 
            </Container>
            </div>
        );
  }
}

export default NavBar;