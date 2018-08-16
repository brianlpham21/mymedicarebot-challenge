import React, { Component } from 'react';
import './app.css';

class Instructions extends Component {
  render() {
    return (
      <div>
        <p className="instructions"><span className="instructions-text">Create a text input box which accepts a URL.</span></p>
        <p className="instructions"><span className="instructions-text">There should be
        a dropdown with options for GET and POST, as well as a submit button.</span></p>
        <p className="instructions"><span className="instructions-text">When the submit button
        is clicked, the URL and HTTP Method should be sent to the back end</span></p>
        <p className="instructions"><span className="instructions-text">where a request is made to the URL using the specified
        HTTP Method. The data received back</span></p>
        <p className="instructions"><span className="instructions-text">from the URL
        should be returned as a string to the front end and displayed.</span></p>
      </div>
    );
  }
}

export default Instructions;
