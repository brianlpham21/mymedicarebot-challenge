import React, { Component } from 'react';
import './app.css';

class UrlForm extends Component {
  state = {
    result: ''
  }

  urlSubmit(event) {
    event.preventDefault();

    this.callApi(event.target.url.value, event.target.method.value)
      .then(res => this.setState({result: res.result}))
      .catch(err => console.log(err));

    const queryTarget = event.target.url;
    queryTarget.value = '';

    const queryMethod = event.target.method;
    queryMethod.value = 'get';
  }

  callApi = async(link, method) => {
    const response = await fetch(`/url`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({url: link, method: method})
    });
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="form form-2">
        <form onSubmit={(event) => this.urlSubmit(event)}>
          <input type="url" name="url" className="input input-2" placeholder="Enter a URL here..." required/>

          <select name="method" className="method-dropdown">
            <option value="get">GET</option>
            <option value="post">POST </option>
          </select>

          <button type="submit" className="submit-button url-submit">Submit</button>
        </form>

        <div className="result-section result-section2">
          <span className="space-holder">2</span><strong>{this.state.result}</strong>
        </div>
      </div>
    );
  }
}

export default UrlForm;
