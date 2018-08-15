import React, { Component } from 'react';
import './app.css';

class UrlForm extends Component {
  urlSubmit(event) {
    event.preventDefault();

    console.log(event.target.url.value)
  }

  render() {
    return (
      <div className="form">
        <form onSubmit={(event) => this.urlSubmit(event)}>
          <input type="url" name="url" className="input" placeholder="Enter a URL here..." required/>
          <select name="method" className="method-dropdown">
            <option value="get">GET</option>
            <option value="post">POST </option>
          </select>
          <button type="submit" className="submit-button url-submit">Submit</button>
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
