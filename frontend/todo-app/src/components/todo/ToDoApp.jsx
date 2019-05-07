import React, {Component} from 'react';

import './ToDoApp.css';

class ToDoApp extends Component {
    render() {
        return (
            <div className="ToDoApp">
                <LoginComponent />
            </div>
        )
    }
}

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
            isLoginFailed: false,
            isLoginSucces: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
    }

    render() {
        return (
            <div>
               <ShowInvalidCredentials isLoginFailed={this.state.isLoginFailed} isLoginSucces={this.state.isLoginSucces} />
               Username:  <input type="text" name="username" value={this.state.username} onChange={this.handleChange} /> 
               Password:  <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
               <button onClick={this.login}>Login</button>
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
        if(this.state.username === 'ronald' && this.state.password === "welkom01" ){
            this.setState({
                isLoginFailed: false,
                isLoginSucces: true
            })
        } else {
            this.setState({
                isLoginFailed: true,
                isLoginSucces: false
            })
        }
    }
}
// Give login message depending on the properties
function ShowInvalidCredentials(props){
    if(props.isLoginFailed){
        return <div className="error" >Invalid Credentials</div>
    }
    if(props.isLoginSucces){
        return <div className="success" >Login Successfully</div>
    }
    return null;
}

export default ToDoApp;
