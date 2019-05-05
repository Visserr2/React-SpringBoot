import React, {Component} from 'react';

import './Counter.css';

    /*  Give state to the class  */
    // Define the initial state in a constructor, always call super-method
    // Bind methods to context that need to change the state
    // Update the state in methods via setSate

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

    render(){
        return (
            <div className="counter">
               <button onClick={this.increment}>+1</button>
               <span className="count">{this.state.counter}</span>
            </div>
        )
    }

    // You can automatically bind a method to the context with an arrow function.
    // The syntax is: increment = () => {};
    increment() {
        // Always call setState when changing state. The changes in setState will merge with the current state
        this.setState({
          counter: this.state.counter + 1   
        });
    }
}

export default Counter;