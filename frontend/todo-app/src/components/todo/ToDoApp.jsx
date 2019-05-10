import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './ToDoApp.css';

class ToDoApp extends Component {
    render() {
        return (
            <div className="ToDoApp">
                <Router>
                    <>
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" component={LoginComponent} />
                            <Route path="/welcome/:name" component={WelcomeComponent} />
                            <Route component={ErrorComponent} />
                        </Switch>
                    </>
                </Router>
            </div>
        )
    }
}

// Generates the welcome page
class WelcomeComponent extends Component {
    render() {
        return <div>Welcome {this.props.match.params.name}</div>
    }
}

// generate the error component
function ErrorComponent() {
    return <div><h1>404</h1><p>This page does not exist.</p></div>
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
            isLoginFailed: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
    }

    render() {
        return (
            <div>
               {this.state.isLoginFailed && <div className="error" >Invalid Credentials</div>}
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
            // redirect to welcome page
            this.props.history.push(`/welcome/${this.state.username}`)
        } else {
            this.setState({
                isLoginFailed: true
            })
        }
    }
}

export default ToDoApp;
