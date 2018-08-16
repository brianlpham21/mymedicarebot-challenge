import React, { Component } from 'react';
import './app.css';

class Main extends Component {
  render() {
    return (
      <div>
        <h1 className="main-title">CHALLENGE</h1>
        <p className="instructions"><span className="instructions-text">Create a text input box where you can enter in a string of text.</span></p>
        <p className="instructions"><span className="instructions-text">There should be a submit button that when clicked makes an API call back to
        your server where it</span></p>
        <p className="instructions"><span className="instructions-text">reverses the string and sends it back to the front end and displays
        the result on the page.</span></p>
      </div>
    );
  }
}

export default Main;
