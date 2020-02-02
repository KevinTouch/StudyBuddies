import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

import InputGroup, { InputGroupText } from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

import DropdownButton from 'react-bootstrap/DropdownButton'

// componentDidMount(){
// 	this.setState({});
//}; 

class CreateGroupForm extends Component {

	constructor() 
{
	super(); 
	this.state = {eventTitle: "",
	time: "", 
	major: "",
	department: "", 
	coursecode: "", 
	coursenum: "" 
};
this.handleEventTitle = this.handleEventTitle.bind(this);
}


handleEventTitle(e) {this.setState({eventTitle : e.target.eventTitle}); }

handleTime(e){this.setState({time: e.target.time}); }

handleMajor(e){this.setState({major: e.target.major}); }

handleDepartment(e){this.setState({department: e.target.department}); }

handlecourseCode(e){this.setState({coursecode: e.target.coursecode}); }

handleCourseNum(e){this.setState({coursenum: e.target.coursenum}); }
	
	render() {
		return ( 
			<div>
				Create Events
				<InputGroup className ="mb-3"> 
				<InputGroup.Prepend> 
				<InputGroup.Text id="basic-addon1">Event Title</InputGroup.Text>
				</InputGroup.Prepend>
				<FormControl placeholder="Enter Event Titile"
				aria-label="Event Title"
				aria-describedby="basic-addon1"
				/>
				</InputGroup>
				
				<InputGroup className="mb-3">
			    <InputGroup.Prepend>
			      <InputGroup.Text id="basic-addon1">Time</InputGroup.Text>
			    </InputGroup.Prepend>
			    <DropdownButton title="Enter Time"
			      placeholder="9:00"
			      aria-label="Time"
			      aria-describedby="basic-addon1"
			    />
				</InputGroup>

				<InputGroup className="mb-3" OnChange={this.handleMajor}>
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

				<Button type="submit">Submit form</Button>
				</div>
			);
		}
	}
	
	export default CreateGroupForm;
	