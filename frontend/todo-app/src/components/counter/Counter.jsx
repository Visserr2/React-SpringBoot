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
        this.reset = this.reset.bind(this);
    }

    // Its possible to put css inline within the JSX. This let you define the styling in variables and set it in the component.
    // Normally you want to seperate style from the JSX.
    render() {
        const style = {fontSize: "200px"};

        return (
            <div className="counter">
                <CounterButton incrementMethod={this.increment} />               
                <CounterButton increment={5} decrement={5} incrementMethod={this.increment}/>
                <CounterButton increment={10} decrement={10} incrementMethod={this.increment}/>
                <span className="count" style={style}>{this.state.counter}</span>
                <ResetButton resetMethod={this.reset}/>
            </div>
        );
    }

    // You can automatically bind a method to the context with an arrow function.
    // The syntax is: increment = () => {};
    // increments the state (counter) of the component
    increment(increment) {
        // Always call setState when changing state. The changes in setState will merge with the current state
        // Use ArrowFunction to access prevState
        this.setState( (prevState) => {
            return {counter: prevState.counter + increment}
        });
    }

    // set the state (counter) to zero
    reset() {
        this.setState({
            counter: 0
        });
    }
}

// The button for the component
class CounterButton extends Component {

    render(){   
        return (
            <div className="ButtonDiv">
                {/* When passing a parameter to a method in an event listener then use the arrow function, else it passes the reference of method and it doesn't compile*/}
               <button className="countButton" onClick={() => this.props.incrementMethod(this.props.increment)}>+{this.props.increment}</button>    
               <button className="countButton" onClick={() => this.props.incrementMethod(-this.props.decrement)}>-{this.props.decrement}</button>              
            </div>
        )
    }
}

// The reset button for the component
class ResetButton extends Component {

    render(){   
        return (
            <div className="ButtonDiv">
               <button className="resetButton" onClick={() => this.props.resetMethod()}>Reset</button>              
            </div>
        )
    }
}

// Setting default props for Counter Component
CounterButton.defaultProps = {
    increment: 1,
    decrement: 1
}

// Setting check for property type
CounterButton.propTypes = {
    increment: PropTypes.number,
    decrement: PropTypes.number
}

export default Counter;