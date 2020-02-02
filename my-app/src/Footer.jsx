import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class Footer extends Component {
	render() {
		return (
			<div style={{padding: '5px'}}>
			<Container>
				<Row>
					<Col>
						Footer
					</Col>
				</Row>
			</Container>
			</div>
		)
	};
}

export default Footer;