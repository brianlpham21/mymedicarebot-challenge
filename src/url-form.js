import React, { Component } from 'react';
import './app.css';

class UrlForm extends Component {
  state = {
    result: ''
  }

  urlSubmit(event) {
    event.preventDefault();

    if (event.target.method.value === 'get') {
      this.callGETApi(event.target.url.value)
        .then(res => this.setState({result: res.result}))
        .catch(err => console.log(err));
    }
    else {
      this.callPOSTApi(event.target.url.value)
        .then(res => this.setState({result: res.result}))
        .catch(err => console.log(err));
    }

    const queryTarget = event.target.url;
    queryTarget.value = '';

    const queryMethod = event.target.method;
    queryMethod.value = 'get';
  }

  callGETApi = async(link) => {
    const response = await fetch(`/url`, {
      method: 'get'
    });
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  callPOSTApi = async(link) => {
    const response = await fetch(`/url`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({url: link})
    });
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

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
          Result: {this.state.result}
          <div className="result"></div>
        </div>
      </div>
    );
  }
}

export default UrlForm;
