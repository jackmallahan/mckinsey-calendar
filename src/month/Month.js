import React, { Component } from 'react';
import './Month.css';

class Month extends Component {
  constructor(){
    super()
  }
  render() {
    return (
      <div className="Month">
        <header className="Month-header">
          <h1 className="Month-title">{Month}</h1>
        </header>
        <p className="Month-intro">
          To get started, edit <code>src/Month.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Month;
