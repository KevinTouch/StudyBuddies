import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import CreateGroupForm from './CreateGroupForm';
import OngoingEventsForm from './OngoingEventsForm';

class StudyForm extends Component {
	render() {
		return ( 
			<Container fluid="true">
				<Row>
					<Col>
						<CreateGroupForm />
					</Col>


					<Col>
					{/*<div style={{ 
							border: 'solid',
					borderWidth: '1px'}}>*/}
						<OngoingEventsForm />
					</Col>
				</Row>    
		 </Container>
	);
	}
}

export default StudyForm;
