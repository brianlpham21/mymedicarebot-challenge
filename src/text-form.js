import React, { Component } from 'react';
import './app.css';

class TextForm extends Component {
  render() {
    return (
      <div className="form form-1">
        <form action="#" method="post">
          <input type="text" name="string-value" className="input" placeholder="Enter some text here..."/>
          <button type="submit" className="submit-button">Reverse It!</button>
        </form>
        <div className="result-section">
          Result:
          <div className="result"></div>
        </div>
      </div>
    );
  }
}

export default TextForm;
