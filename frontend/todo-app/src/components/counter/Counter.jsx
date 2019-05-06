import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Counter.css';

    /*  Give state to the class  */
    // Define the initial state in a constructor, always call super-method
    // Bind methods to context that need to change the state
    // Update the state in methods via setSate

    // var is function scoped
    // let is block scoped
    // const is same scope as let only it cannot be changed

    // You can pass parameters and reference of methods to components

// When calling a function within JSX don't use the parentheses after the method, just the reference.
// When calling a local function within a class-component then put 'this' before the method.
class Counter extends Component {
    
    // creating constructor
    constructor(){
        // always call super in constructor
        super();

        // setting state
        this.state = {
            counter : 0
        }

        // binding the method to the component
        this.increment = this.increment.bind(this);
    }

    // Its possible to put css inline within the JSX. This let you define the styling in variables and set it in the component.
    // Normally you want to seperate style from the JSX.
    render() {
        const style = {fontSize: "50px"};

        return (
            <div className="counter">
                <CounterButton incrementMethod={this.increment} />
                {/* In this component a parameter and reference to a method are passed to the component */}
                <CounterButton increment={5} incrementMethod={this.increment}/>
                <CounterButton increment={10} incrementMethod={this.increment}/>
                <span className="count" style={style}>{this.state.counter}</span>
            </div>
        );
    }

    increment(increment) {
        // Always call setState when changing state. The changes in setState will merge with the current state
        this.setState({
            counter: this.state.counter + increment
        });
    }
}

// The button for the component
class CounterButton extends Component {

    render(){   
        return (
            <div className="counter">
               <button onClick={this.increment}>+{this.props.increment}</button>              
            </div>
        )
    }

    // You can automatically bind a method to the context with an arrow function.
    // The syntax is: increment = () => {};
    increment = () => {
         this.props.incrementMethod(this.props.increment);
    }
}

// Setting default props for Counter Component
CounterButton.defaultProps = {
    increment: 1
}

// Setting check for property type
CounterButton.propTypes = {
    increment: PropTypes.number
}

export default Counter;