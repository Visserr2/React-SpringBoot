import React, {Component} from 'react'; 
import FirstComponent, {SecondComponent} from './FirstComponent';
import FunctionComponent from './FunctionComponent';

// The components that shows our first components
class LearningComponents extends Component {
    render() {
      return (
        <div className="LearningComponents">
          My Todo Application
          <FirstComponent />
          <SecondComponent />
          <FunctionComponent />
        </div>
      );
    }
  }

  export default LearningComponents;