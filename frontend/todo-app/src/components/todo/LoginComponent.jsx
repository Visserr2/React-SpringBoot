import React, {Component} from 'react';
import AuthenticationService from './AuthenticationService.js';

/**
 * This component handles the login.
 * To change the input in forms event listeners must be used to change the form or else the value would be read only. First the state must be initialized.
 **/
class LoginComponent extends Component {

    // Constructor for default values of the form
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            isLoginFailed: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {this.state.isLoginFailed && <div className="alert alert-warning" >Invalid Credentials</div>}
                    Username:  <input type="text" name="username" value={this.state.username} onChange={this.handleChange} /> 
                    Password:  <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    <button className="btn btn-success" onClick={this.login}>Login</button>
                </div>
            </div>
        )
    }

    // Event handler for changing values in form
    // Left hand side variables must be in brackets
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    login(){
        if(this.state.username === 'ronald' && this.state.password === "password" ){
            // use authentication service to save user in sessionStorage
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
            // redirect to welcome page with path param. Need to use ticks when passing variable
            this.props.history.push("/welcome");
        } else {
            this.setState({
                isLoginFailed: true
            })
        }
    }
}

export default LoginComponent;