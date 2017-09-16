import React, { Component } from 'react'

class Register extends Component {
	constructor(){
		super()
		this.state = {
			registration: {
				username: '',
				password: ''
			}
		}
	}

	updateRegistration(event){
		let updated = Object.assign({}, this.state.registration)
		updated[event.target.id] = event.target.value
		this.setState({
			registration: updated
		})
	}

	submitRegistration(event){
		event.preventDefault()

		if (this.state.registration.username.length == 0){
			alert('Please add your username.')
			return
		}

		if (this.state.registration.password.length == 0){
			alert('Please set your password.')
			return
		}

		this.props.onRegister(this.state.registration)
	}

	submitLoginCredentials(event){
		event.preventDefault()
		if (this.state.registration.username.length == 0){
			alert('Please add your username.')
			return
		}

		if (this.state.registration.password.length == 0){
			alert('Please set your password.')
			return
		}

		this.props.onLogin(this.state.registration)
	}

	render() {
		return (
			<div>
				<h2 style={{color: '#fff'}}>Sign Up</h2>
				<input onChange={this.updateRegistration.bind(this)} id="username" type="text" placeholder="Username" /><br />
				<input onChange={this.updateRegistration.bind(this)} id="password" type="password" placeholder="Password" /><br />
					<button className="button special small" style={{borderColor: '#fff', background: '#A1CBFF', marginTop:12, marginLeft:12, width:90+'%', color: '#fff'}} onClick={this.submitRegistration.bind(this)}>Join</button>
					<button className="button special small" style={{borderColor: '#fff', background: '#A1CBFF', marginTop:12, marginLeft:12, width:90+'%', color: '#fff'}} onClick={this.submitLoginCredentials.bind(this)}>Sign In</button>

			</div>
		)
	}
}

export default Register