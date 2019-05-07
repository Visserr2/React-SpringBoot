import React, {Component} from 'react';

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
            password: ''
        }

        this.usernameChange = this.usernameChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
    }

    render() {
        return (
            <div>
               Username:  <input type="text" name="username" value={this.state.username} onChange={this.usernameChange} /> 
               Password:  <input type="password" name="password" value={this.state.password} onChange={this.passwordChange}/>
               <button>Login</button>
            </div>
        )
    }

    // Event handler for changing value
    usernameChange(event) {
        this.setState({
            username: event.target.value
        })
    }

    passwordChange(event) {
        this.setState({
            password: event.target.value
        })
    }
}

export default ToDoApp;
