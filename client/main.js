import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>This is the App Component</div>
  )
}

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'))
});