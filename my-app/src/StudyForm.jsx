import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class StudyForm extends Component {
	render() {
		return ( 
			<Container>
				<Row>
					<Col>
						<p>Box 1</p>
					</Col>
					<Col>
						<p>Box 2</p>
					</Col>
				</Row>    
		 </Container>
	);
	}
}

export default StudyForm;
