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
        {/* navigation bar */}
        <header>
          <div className="app-header">
            <a href="https://www.mymedicarebot.com/" target="_blank" rel="noopener noreferrer"><img src='https://www.mymedicarebot.com/mmb/wp-content/uploads/2018/07/lgoooooooo.png' alt="mymedicarebot-logo" className="header-image" /></a>
            <ul className="app-header-items">
              <li><a href="https://www.mymedicarebot.com/" target="_blank" rel="noopener noreferrer">mymedicarebot</a></li>
              <li><a href="https://github.com/brianlpham21/mymedicarebot-challenge">about</a></li>
              <li><a href="https://github.com/brianlpham21/mymedicarebot-challenge">contact</a></li>
            </ul>
          </div>
        </header>

        {/* main title and first challenge instructions */}
        <div className="main">
          <Main />
        </div>

        <div className="forms-section">
          {/* first challenge */}
          <TextForm />

          {/* second challenge instructions */}
          <Instructions />

          {/* second challenge */}
          <UrlForm />
        </div>
      </div>
    );
  }
}

export default App;
