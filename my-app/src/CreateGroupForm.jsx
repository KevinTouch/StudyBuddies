import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'


class CreateGroupForm extends Component {
	render() {
		return ( 
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
			);
		}
	}
	
	export default CreateGroupForm;
	