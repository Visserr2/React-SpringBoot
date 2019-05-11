import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// Generates the welcome page. Reading path param and show on page
// Using Link-component instead of a-tag because Link-component only refreshes the component. A-tag refreshed whole page
class WelcomeComponent extends Component {
    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                   <p>Welcome {sessionStorage.getItem('authenticatedUser')}! You can manage your todos <Link to="/todo">here</Link>.</p>
                </div>
            </>
        )
    }
}

export default WelcomeComponent;