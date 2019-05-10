import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './ToDoApp.css';

class ToDoApp extends Component {
    render() {
        return (
            <div className="ToDoApp">
                <Router>
                    <>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" component={LoginComponent} />
                        <Route path="/welcome" component={WelcomeComponent} />
                    </>
                </Router>
            </div>
        )
    }
}


class WelcomeComponent extends Component {
    render() {
        return <div>Welcome Ronald</div>
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
               {this.state.isLoginFailed && <div className="error" >Invalid Credentials</div>}
               {this.state.isLoginSucces && <div className="success" >Login Successfully</div>}
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

export default ToDoApp;
