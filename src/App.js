import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
      super(props);
      this.clickHeader = this.clickHeader.bind(this);
      this.clickBody = this.clickBody.bind(this);
  }

  clickHeader() {
      this.props.store.dispatch({type: 'INCREMENT'});
  }

  clickBody() {
      this.props.store.dispatch({type: 'DECREMENT'});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header" onClick={this.clickHeader}>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <p>{this.props.value}</p>
        </div>
        <p className="App-intro" onClick={this.clickBody}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
