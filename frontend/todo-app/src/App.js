import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        My Todo Application
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
        <FourthComponent />
      </div>
    );
  }
}

// Class Component, need to extend component and override Render-method
class FirstComponent extends Component {
  render() {
    return (
      <div className="FirstComponent">
        First Component
      </div>
    );
  }
}

class SecondComponent extends Component {
  render() {
    return (
      <div className="SecondComponent">
        Second Component
      </div>
    );
  }
}

// Function component
function ThirdComponent() {
  return (
    <div className="ThirdComponent">
      Third Component
    </div>
  );
}

function FourthComponent() {
  return (
    <div className="FourthComponent">
      Fourth Component
    </div>
  );
}


export default App;
