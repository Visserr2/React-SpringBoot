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

class LoginComponent extends Component {
    render() {
        return (
            <div>
               Username:  <input type="text" name="username" /> 
               Password:  <input type="password" name="password" />
               <button>Login</button>
            </div>
        )
    }
}

export default ToDoApp;
