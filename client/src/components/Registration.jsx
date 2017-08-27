import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import '../css/registration.css';

class Registration extends Component {

	constructor(props) {
		super(props);
		this.state = {name: '', email: '', password: ''};

		this.handleChangeN = this.handleChangeN.bind(this);
		this.handleChangeE = this.handleChangeE.bind(this);
		this.handleChangeP = this.handleChangeP.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleChangeN(event) {
		this.setState({name: event.target.value});
	}

	handleChangeE(event) {
		this.setState({email: event.target.value});
	}

	handleChangeP(event) {
		this.setState({password: event.target.value});
	}

	handleClick(){
		localStorage.setItem('name', this.state.name);
		localStorage.setItem('email', this.state.email);
		localStorage.setItem('password', this.state.password);

		fetch('/api/register', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: this.state.name,
				email: this.state.email,
				password: this.state.password
			})
		})
	}

  render() {
    return (
    	
		    <div className="registration"> 
		    	<div className="header"> Sign up in seconds</div>
				<hr className="line"/>
		    	<div className="inputName">Name</div>
		    	<input className="inputBox" value={this.state.name} onChange={this.handleChangeN}/>
		    	<div className="inputName">Email*</div>
		    	<input className="inputBox"  value={this.state.email} onChange={this.handleChangeE}/>
				<div className="note">*This will be your username too.</div>
		    	<div className="inputName">Password</div>
		    	<input className="inputBox" type='password' value={this.state.password} onChange={this.handleChangeP}/>

				<div>
					<button className="next-button1" onClick={() => this.handleClick()}>NEXT</button>
				</div>
		     </div>

    );
  }
}

export default Registration;