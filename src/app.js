import React, { Component } from 'react';
import './app.css';

import Main from './main';
import TextForm from './text-form';
import Instructions from './instructions';
import UrlForm from './url-form';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <div className="app-header">
            <ul className="app-header-items">
              <li><a href="https://www.mymedicarebot.com/" target="_blank" rel="noopener noreferrer">mymedicarebot</a></li>
              <li><a href="#">about</a></li>
              <li><a href="#">contact</a></li>
            </ul>
          </div>
        </header>

        <div className="main">
          <Main />
        </div>

        <div className="forms-section">
          <TextForm />
          <Instructions />
          <UrlForm />
        </div>
      </div>
    );
  }
}

export default App;
