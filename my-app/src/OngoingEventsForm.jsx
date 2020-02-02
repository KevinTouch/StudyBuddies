import React, { Component } from 'react';
import firebase from './firebase.js'; 
import Table from 'react-bootstrap/Table'

class OngoingEventsForm extends Component {
	constructor() {
		super();
		this.state = {
			currentItem: '',
			username: '',
			items: []
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this); 
	}

	componentDidMount() {
		let db = firebase.firestore();
		db.collection("users").get().then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
					console.log(`${doc.id} => ${doc.data()["firstname"]}`);
			});
	});

	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleSubmit(e) {
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
		return ( 	
			<div>
				Ongoing Events
				<section>
				<form>
					<input type="text" name="username" placeholder="What's your name?" onChange={this.handleChange} value={this.state.username} />
					<input type="text" name="currentItem" placeholder="What are you bringing?" onChange={this.handleChange} value={this.state.currentItem} />
					<button onClick={this.handleSubmit}>submit</button> 				
					</form>
				</section>
				<ul>
					{this.state.items.map((item) => {
	        return (
	          <li key={item.id}>
	            <h3>{item.title}</h3>
	            <p>brought by: {item.user}</p>
	          </li>
        	)
      })}
				</ul>
			</div>
		);
	}
}

export default OngoingEventsForm;
