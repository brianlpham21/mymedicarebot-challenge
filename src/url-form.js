import React, { Component } from 'react';
import './app.css';

class UrlForm extends Component {
  render() {
    return (
      <div className="form">
        <form action="#" method="post">
          <input type="url" name="url-value" className="input" placeholder="Enter a URL here..."/>
          <select name="method" className="method-dropdown">
            <option value="get">GET</option>
            <option value="post">POST </option>
          </select>
          <button type="submit" className="submit-button">Submit</button>
        </form>
        <div className="result-section">
          Result:
          <div className="result"></div>
        </div>
      </div>
    );
  }
}

export default UrlForm;
