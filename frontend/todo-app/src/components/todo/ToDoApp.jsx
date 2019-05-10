import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import './ToDoApp.css';

class ToDoApp extends Component {
    render() {
        return (
            <div className="ToDoApp">
                <Router>
                    <>
                        <HeaderComponent />
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" component={LoginComponent} />
                            <Route path="/welcome/:name" component={WelcomeComponent} />
                            <Route path="/todo" component={ListTodosComponent} />
                            <Route component={ErrorComponent} />
                        </Switch>
                        <FooterComponent />
                    </>
                </Router>
            </div>
        )
    }
}

class HeaderComponent extends Component {
    render(){
        return (
            <header>Header <hr /></header>
        )
    }
}
class FooterComponent extends Component {
    render(){
        return (
            <footer><hr />Footer</footer>
        )
    }
}

// Generates the welcome page. Reading path param and show on page
// Using Link-component instead of a-tag because Link-component only refreshes the component. A-tag refreshed whole page
class WelcomeComponent extends Component {
    render() {
        return (
            <div>
                <h2>Welcome {this.props.match.params.name}</h2>
                <p>You can manage your todos <Link to="/todo">here</Link>.</p>
            </div>
        )
    }
}

// Generates the List todo page
class ListTodosComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            todo: [
                {id: 1, description: 'Learn React', done: false, targetDate: new Date()},
                {id: 2, description: 'Learn CSS', done: false, targetDate: new Date()},
                {id: 3, description: 'Learn Spring Boot', done: false, targetDate: new Date()},
                {id: 4, description: 'Learn Mule', done: false, targetDate: new Date()}
            ]
        }
    }

    render() {
        return (
            <div>
                <h1>List Todos</h1>
                <table className="todo_table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Description</th>
                            <th>Target Date</th>
                            <th>Done</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todo.map (
                                todo => 
                                    <tr>                          
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                        <td>{todo.done.toString()}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
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
            // redirect to welcome page with path param. Need to use ticks when passing variable
            this.props.history.push(`/welcome/${this.state.username}`)
        } else {
            this.setState({
                isLoginFailed: true
            })
        }
    }
}

export default ToDoApp;
