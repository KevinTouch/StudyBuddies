import React, { Component } from 'react';
import InputGroup, { InputGroupText } from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'


class CreateGroupForm extends Component {

	constructor() {
		super(); 
		this.state = {
			eventTitle: "",
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

	onHandleSubmit(e) {
		e.preventDefault(); 
		console.log("X");
		/*const demop = {test: this.state.eventTitle};
		console.log(demop); */
	}

	render() { 

		return ( 
			<div>
				Create Events
				<InputGroup className ="mb-3" name="eventTitle" onChange={this.handleChange} value={this.state.eventTitle}>
					<InputGroup.Prepend> 
						<InputGroup.Text id="basic-addon1" style={{paddingRight:"92px"}}>Event Title</InputGroup.Text>
					</InputGroup.Prepend>
					<FormControl
						name="eventTitle" 
						placeholder="Enter Event Titile"
						aria-label="Event Title"
						aria-describedby="basic-addon1"
					/>
				</InputGroup>
				
				<InputGroup className="mb-3">
			    <InputGroup.Prepend>
			      <InputGroup.Text id="basic-addon1" style={{paddingRight:"130px"}}>Time</InputGroup.Text>
			    </InputGroup.Prepend>
					<FormControl
						name="eventTitle" 
						placeholder="Time"
						aria-label="Event Title"
						aria-describedby="basic-addon1"
					/>
				</InputGroup>

				<InputGroup className="mb-3" onChange={this.handleMajor}>
			    <InputGroup.Prepend>
			      <InputGroup.Text id="basic-addon1" style={{paddingRight:"129px"}}>Place</InputGroup.Text>
			    </InputGroup.Prepend>
					<FormControl
			      placeholder="Place"
			      aria-label="Place"
			      aria-describedby="basic-addon1"
			    />
				</InputGroup>


				<InputGroup className="mb-3">
			    <InputGroup.Prepend>
			      <InputGroup.Text id="basic-addon1" style={{paddingRight:"115px"}}>Subject</InputGroup.Text>
			    </InputGroup.Prepend>
			    <FormControl
			      placeholder="Subject"
			      aria-label="Subject"
			      aria-describedby="basic-addon1"
			    />
				</InputGroup>
				
				<InputGroup className="mb-3">
			    <InputGroup.Prepend>
			      <InputGroup.Text>Number People Going</InputGroup.Text>
			    </InputGroup.Prepend>
				  <FormControl
			      placeholder="Number People Going"
			      aria-label="Number People Going"
			      aria-describedby="basic-addon1"
			    />
				</InputGroup>
				</div>
				
			);
		}
	}
	
	export default CreateGroupForm;
	