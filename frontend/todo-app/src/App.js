/**
 * It is possible to export multiple components from one jsx-file (module), but there is always one default.
 * The default component is always imported first. The other (not default) components should be added in curly braces after the first component.
 * If you try to import a Component that doesn't exist, it will return the default component. This does not work for components between the curly braces
 * See first import statement as example.
 **/
// Import components
import React, {Component} from 'react'; 

// Import custom components
import LearningComponents from './components/learning-examples/LearningComponents';
import Counter from './components/counter/Counter'
import ToDoApp from './components/todo/ToDoApp'


// Import Css
import './App.css';

/** 
 * React uses JSX to create attributes. This is html-like syntax thats converted by Babel to Javascript code. 
 * Every JSX-statement can only return one parent-element. This element can contain multiple child-elements. All tags must be closed in JSX.
 * Alls the tags should be lower-case.
 * React should always be imported when using JSX.
 **/

 /**
  * Every React-component(Class- and function-component) must start with a capital-letter. 
  * Component should be imported when creating Class-Components.
  **/

  /**
   * Class Components: These components can contain state  
   * Functional components: For components not needing state. Lesser code and more performance.
   **/

  // Class Component, need to extend component and override Render-method
class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoApp />
      </div>
    );
  }
}

export default App;
