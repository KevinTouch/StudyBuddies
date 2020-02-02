import React, { Component } from 'react';
import firebase from './firebase.js'; 
import Table from 'react-bootstrap/Table'

class OngoingEventsForm extends Component {
	constructor() {
		super();
		this.state = {
			currentItem: '',
			username: '',
			items: [],

			class: "",
			location: "",
			participants: "",
			time: "",
			title: ""
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this); 
	}

	componentDidMount() {
		let db = firebase.firestore();
    const itemsT = [];
		db.collection("events").get()
	    .then(function(querySnapshot) {
	        querySnapshot.forEach(function(doc) {
							console.log(doc.id, " => ", doc.data());
							const data = {
								class: doc.data()["class"],
								location: doc.data()["location"],
								participants: doc.data()["participants"],
								time: doc.data()["time"],
								title: doc.data()["title"]
							}
							itemsT.push(data);
	        });
	    }) .catch(function(error) {
	        console.log("Error getting documents: ", error);
			});
			
			this.setState({ items: itemsT });
			console.log("Set");
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


	renderTables() {
		
		return(
			<div>
				<Table responsive="sm">
		    <thead>
		      <tr>
		        <th>#</th>
		        <th>Table heading</th>
		        <th>Table heading</th>
		        <th>Table heading</th>
		        <th>Table heading</th>
		        <th>Table heading</th>
		        <th>Table heading</th>
		      </tr>
		    </thead>
			</Table>
			</div>
		);
	};


	render() {
		const {items} = this.state;
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
			</div>
		);
	}
}

export default OngoingEventsForm;
