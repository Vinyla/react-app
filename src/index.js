import './index.css';
// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

//Create a react component
const App = () => {
  return <h2>Hello React!</h2>;
};

// Show it on the screen
// what and where
ReactDOM.render(<App />, document.getElementById('root'));
