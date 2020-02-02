import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Dropdown from 'react-bootstrap/Dropdown'

class StudyForm extends Component {
	render() {
		return ( 
			<Container fluid="true">
				<Row>
					<Col>
						{/* Uncomment to see border
						<div style={{ 
							border: 'solid',
						borderWidth: '1px'}}>*/}
						<div>
							Create Events
							<InputGroup className="mb-3">
						    <InputGroup.Prepend>
						      <InputGroup.Text id="basic-addon1">Time</InputGroup.Text>
						    </InputGroup.Prepend>
						    <FormControl
						      placeholder="9:00"
						      aria-label="Time"
						      aria-describedby="basic-addon1"
						    />
  						</InputGroup>

							<InputGroup className="mb-3">
						    <InputGroup.Prepend>
						      <InputGroup.Text id="basic-addon1">School/Major</InputGroup.Text>
						    </InputGroup.Prepend>
								<FormControl
						      placeholder="Computer Science"
						      aria-label="School/Major"
						      aria-describedby="basic-addon1"
						    />
								<InputGroup.Append>
						
								</InputGroup.Append>

  						</InputGroup>

							<InputGroup className="mb-3">
						    <InputGroup.Prepend>
						      <InputGroup.Text id="basic-addon1">Department</InputGroup.Text>
						    </InputGroup.Prepend>
						    <FormControl
						      placeholder="Department"
						      aria-label="Department"
						      aria-describedby="basic-addon1"
						    />
  						</InputGroup>
							
							<InputGroup className="mb-3">
						    <InputGroup.Prepend>
						      <InputGroup.Text id="basic-addon1">Course Code</InputGroup.Text>
						    </InputGroup.Prepend>
						    <FormControl
						      placeholder="Course Code"
						      aria-label="Course Code"
						      aria-describedby="basic-addon1"
						    />
  						</InputGroup>

							<InputGroup className="mb-3">
						    <InputGroup.Prepend>
						      <InputGroup.Text id="basic-addon1">Course Number</InputGroup.Text>
						    </InputGroup.Prepend>
						    <FormControl
						      placeholder="Course Number"
						      aria-label="Course Number"
						      aria-describedby="basic-addon1"
						    />
  						</InputGroup>

							<Button type="submit">Submit form</Button>

						</div>
					</Col>


					<Col>
					{/*<div style={{ 
							border: 'solid',
					borderWidth: '1px'}}>*/}
					<div>
						Search Events
					</div>
					</Col>
				</Row>    
		 </Container>
	);
	}
}

export default StudyForm;
