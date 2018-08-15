import React, { Component } from 'react';
import './app.css';

import TextForm from './text-form';
import UrlForm from './url-form';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          Welcome to My Medicare Bot Coding Challenge
        </header>

        <div className="forms-section">
          <TextForm />
          <UrlForm />
        </div>
      </div>
    );
  }
}

export default App;
