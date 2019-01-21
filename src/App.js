import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FizzBuzzCalculations from './Calculations';


const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class FizzBuzzInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onValueChange(e.target.value);
  }

  render() {
    const className = "myClass";
    const valueIn = this.props.valueIn;
    return (
      <fieldset>
        <legend>Enter input value :</legend>
        <input className={className} value={valueIn}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class FizzBuzzMessage extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const valueIn = this.props.value;

    if (!valueIn) {
      return (
        <div className="fizzBuzzMessage"> 
          <h2>Waiting for input...</h2>
        </div>
      );
    }
    
    return (
      <div className="fizzBuzzMessage">
        <h2>{valueIn}</h2>
      </div>);
  };
}


class Calculator extends React.Component {
  constructor(props) {
    super(props);
  }

  handleFizzBuzzChange() {

  }

  render() {
    const calc = new FizzBuzzCalculations();

    return (
      <div>
        <FizzBuzzInput
          onValueChange={this.handleFizzBuzzChange} />
          <hr/>
        <FizzBuzzMessage />
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The FizzBuzz Challenge!</h1>
        </header>
        
        <div className="App-form">
          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;