import React, {Component} from 'react'; 

// Default exported component
export default class FirstComponent extends Component {
    render() {
      return (
        <div className="FirstComponent">
          First Component
        </div>
      );
    }
  }

  // Exported component that is not default
  export class SecondComponent extends Component {
    render() {
      return (
        <div className="SecondComponent">
          Second Component
        </div>
      );
    }
  }
