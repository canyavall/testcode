import React, { Component } from 'react';
import logo from './logo.svg';
import { database } from './firebase';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    database.ref('/').on('value', (snapshot) => {
      this.setState({
        data: snapshot.val()
      })
      console.log("data changed", snapshot.val());
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React firebase</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <pre className="App-data">
          { JSON.stringify(this.state.data, null, 2)}
        </pre>
      </div>
    );
  }
}

export default App;
