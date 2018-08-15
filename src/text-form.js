import React, { Component } from 'react';
import './app.css';

class TextForm extends Component {
  state = {
    result: ''
  }

  textSubmit(event) {
    event.preventDefault();

    this.callApi(event.target.string.value)
      .then(res => this.setState({result: res.result}))
      .catch(err => console.log(err));

    const queryTarget = event.target.string;
    queryTarget.value = '';
  }

  callApi = async(term) => {
    const response = await fetch(`/reverse/${term}`);
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="form form-1">
        <form onSubmit={(event) => this.textSubmit(event)}>
          <input type="text" name="string" className="input" placeholder="Enter some text here..." required/>
          <button type="submit" className="submit-button text-submit">Reverse It!</button>
        </form>
        
        <div className="result-section">
          Result: <strong>{this.state.result}</strong>
          <div className="result"></div>
        </div>
      </div>
    );
  }
}

export default TextForm;
