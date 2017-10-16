import React, { Component } from 'react';
import logo from './logo.svg';
import { database } from './firebase';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      newData: ''
    }

    this.dataRef = null;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.dataRef = database.ref('/')
    //this.dataRef.once('value', (snapshot) => { -> Return a promise
    this.dataRef.on('value', (snapshot) => {
      // console.log('child_added', snapshot.val());
      this.setState({
        data: snapshot.val()
      })
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // database.ref()
    //   .child('AMAZINGNEWDATA2')
    //   .push(this.state.newData)
    //database.ref('/AMAZINGNEWDATA/testingchild/subtree').push(this.state.newData)
    this.dataRef.push(this.state.newData)
  }

  handleChange(e) {
    const newData = e.target.value;
    this.setState({
      newData
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
          { JSON.stringify(this.state.data, null, 4)}
        </pre>
        <form className="App-form" onSubmit={this.handleSubmit}>
          <input type="text" value = {this.state.newData} onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default App;
