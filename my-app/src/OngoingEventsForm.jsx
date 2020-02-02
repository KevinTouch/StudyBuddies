import React, { Component } from 'react';
import firebase from './firebase.js'; 

class OngoingEventsForm extends Component {
	constructor() {
		super();
		this.state = {
			currentItem: '',
			username: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this); 
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log("Button was clicked!");
		const itemsRef = firebase.database().ref('items');
  	const item = {
	    title: this.state.currentItem,
	    user: this.state.username
	  }
	  itemsRef.push(item);
	  this.setState({
	    currentItem: '',
	    username: ''
	  });
	}


	render() {
		return ( 	
			<div>
				<section>
				<form>
					<input type="text" name="username" placeholder="What's your name?" onChange={this.handleChange} value={this.state.username} />
					<input type="text" name="currentItem" placeholder="What are you bringing?" onChange={this.handleChange} value={this.state.currentItem} />
					<button onClick={this.handleSubmit}>submit</button> 				
					</form>
				</section>
			</div>
		);
	}
}

export default OngoingEventsForm;
