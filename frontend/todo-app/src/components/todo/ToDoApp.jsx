import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AuthenticatedRoute from './AuthenticatedRoute';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import LoginComponent from './LoginComponent';
import LogoutComponent from './LogoutComponent';
import WelcomeComponent from './WelcomeComponent';
import ListTodosComponent from './ListToDoComponent';

import './ToDoApp.css';

class ToDoApp extends Component {
    render() {
        return (
            <div className="ToDoApp">
                    <Router>
                            <HeaderComponent />
                            <Switch>
                                <Route path="/" exact component={LoginComponent} />
                                <Route path="/login" component={LoginComponent} />
                                <AuthenticatedRoute path="/welcome" component={WelcomeComponent} />
                                <AuthenticatedRoute path="/todo" component={ListTodosComponent} />
                                <AuthenticatedRoute path="/logout" component={LogoutComponent} />
                                <Route component={ErrorComponent} />
                            </Switch>
                            <FooterComponent />
                    </Router>
            </div>
        )
    }
}

// generate the error component
function ErrorComponent() {
    return <div><h1>404</h1><p>This page does not exist.</p></div>
}

export default ToDoApp;
