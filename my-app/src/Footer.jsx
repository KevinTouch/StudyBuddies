import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class Footer extends Component {
	render() {
		return (
			<div style={{padding: '5px', border: '1px solid black', 
				background: 'black', bottom: "0", position: "absolute", width: "100%"}}>
			<Container>
				<Row>
					<Col>
						{/*<p style={{color: 'white'}}>Footer</p>*/}
					</Col>
				</Row>
			</Container>
			</div>
		)
	};
}

export default Footer;