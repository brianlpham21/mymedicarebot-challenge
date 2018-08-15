import React, { Component } from 'react';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Welcome to My Medicare Bot Coding Challenge</h1>
        </header>
        <form action="#" method="post">
          <input type="text" name="string-value" placeholder="Enter some text here..."/>
          <input type="submit" value="Reverse It!" />
        </form>
        <form action="#" method="post">
          <input type="url" name="url-value" placeholder="Enter a URL here..."/>
          <select name="method">
            <option value="get">GET</option>
            <option value="post">POST </option>
          </select>
          <input type="submit" value="Reverse It!" />
        </form>
      </div>
    );
  }
}

export default App;
