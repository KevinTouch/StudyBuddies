import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

import InputGroup, { InputGroupText } from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

import DropdownButton from 'react-bootstrap/DropdownButton'

//import TimePicker from 'rc-time-picker' 
import moment from 'moment'

// componentDidMount(){
// 	this.setState({});
//}; 

class CreateGroupForm extends Component {

	constructor() 
{
	super(); 
	this.state = {eventTitle: "",
	time: moment(), 
	major: "",
	department: "", 
	coursecode: "", 
	coursenum: "" 
};
this.handleChange = this.handleChange.bind(this);
}


handleChange(e) {
	console.log(e.target.value)
	this.setState({
		[e.target.name]: e.target.value
	});
}

onHandleSubmit(e)
{
	e.preventDefault(); 
	console.log("X");
	const demop = {test: this.state.eventTitle}; 
	console.log(demop); 
	
}

	render() { 
		return ( 
			<div>
				Create Events
				<InputGroup className ="mb-3" name="eventTitle" onChange={this.handleEventChange} value={this.state.eventTitle}>
				<InputGroup.Prepend> 
				<InputGroup.Text id="basic-addon1">Event Title</InputGroup.Text>
				</InputGroup.Prepend>
				<FormControl
				name="eventTitle" 
				placeholder="Enter Event Titile"
				aria-label="Event Title"
				aria-describedby="basic-addon1"
				/>
				<InputGroup.Append>
				</InputGroup.Append>
				</InputGroup>
				
				<InputGroup className="mb-3">
			    <InputGroup.Prepend>
			      <InputGroup.Text id="basic-addon1">Time</InputGroup.Text>
			    </InputGroup.Prepend>
				</InputGroup>

				<InputGroup className="mb-3" onChange={this.handleMajor}>
			    <InputGroup.Prepend>
			      <InputGroup.Text id="basic-addon1">School/Major</InputGroup.Text>
			    </InputGroup.Prepend>
					<FormControl
			      placeholder="Example: Computer Science"
			      aria-label="School/Major"
			      aria-describedby="basic-addon1"
			    />
					<InputGroup.Append>
					{this.state.major}
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

				<Button onClick={this.onHandleSubmit}>Submit form</Button>
				</div>
			);
		}
	}
	
	export default CreateGroupForm;
	