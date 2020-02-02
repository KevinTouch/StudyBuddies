import React, { Component } from 'react';
import InputGroup, { InputGroupText } from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import firebase from './firebase.js'; 


class CreateGroupForm extends Component {
	constructor() {
		super(); 
		this.state = {
			classType: "",
			location: "",
			participants: "", 
			time: "", 
			title: "" 
	};
}

	handleChange = (e) => {
		this.setState({ 
			[e.target.name]: e.target.value 
		});
	};


	handleSubmit = (e) => {		
		e.preventDefault();
		console.log("Button was clicked!");

		let db = firebase.firestore();
		db.collection("events").add({
			title: this.state.currentItem,
			user: this.state.username
		})
		.then(function(docRef) {
				console.log("Document written with ID: ", docRef.id);
		})
		.catch(function(error) {
				console.error("Error adding document: ", error);
		});

		this.setState({
			currentItem: '',
			username: ''
		});
	}

	render() {
		const {classType, location, participants, time, title} = this.state;
		return ( 
			<div>
				Create Events
				<InputGroup className="mb-3" onChange={this.handleChange} value={classType} name="classType">
			    <InputGroup.Prepend>
			      <InputGroup.Text id="basic-addon1" style={{paddingRight:"60px"}}>Class</InputGroup.Text>
			    </InputGroup.Prepend>
			    <FormControl
						name="classType"
			      placeholder="Class Name"
			      aria-label="classType"
			      aria-describedby="basic-addon1"
			    />
				</InputGroup>

				<InputGroup className="mb-3" onChange={this.handleChange} value={location} name="location">
			    <InputGroup.Prepend>
			      <InputGroup.Text id="basic-addon1" style={{paddingRight:"35px"}}>Location</InputGroup.Text>
			    </InputGroup.Prepend>
					<FormControl
						name="location"
			      placeholder="Location"
			      aria-label="location"
			      aria-describedby="basic-addon1"
			    />
				</InputGroup>

				<InputGroup className="mb-3" onChange={this.handleChange} value={participants} name="participants">
			    <InputGroup.Prepend>
			      <InputGroup.Text>Participants</InputGroup.Text>
			    </InputGroup.Prepend>
				  <FormControl
						name="participants"
			      placeholder="# of Participants"
			      aria-label="participants"
			      aria-describedby="basic-addon1"
			    />
				</InputGroup>


				<InputGroup className="mb-3" onChange={this.handleChange} value={time} name="time">
			    <InputGroup.Prepend>
			      <InputGroup.Text id="basic-addon1" style={{paddingRight:"60px"}}>Time</InputGroup.Text>
			    </InputGroup.Prepend>
					<FormControl
						name="time" 
						placeholder="Time"
						aria-label="Time"
						aria-describedby="basic-addon1"
					/>
				</InputGroup>

				<InputGroup className ="mb-3" onChange={this.handleChange} value={title} name="title">
					<InputGroup.Prepend> 
						<InputGroup.Text id="basic-addon1" style={{paddingRight:"65px"}}>Title</InputGroup.Text>
					</InputGroup.Prepend>
					<FormControl
						name="title" 
						placeholder="Enter Event Titile"
						aria-label="Title"
						aria-describedby="basic-addon1"
					/>
				</InputGroup>
				
				</div>
			);
		}
	}
	
	export default CreateGroupForm;
	