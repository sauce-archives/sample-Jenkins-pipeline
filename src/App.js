import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TemperatureCalculations from './Calculations';


const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
  k: 'Kelvin'
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    const className = "scale-type-" + scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input className={className} value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class TemperatureMessage extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const celsius = this.props.celsius;
    const fahrenheit = this.props.fahrenheit;
    const kelvin = this.props.kelvin;
    
    if (!celsius || !fahrenheit || !kelvin) {
      return (
        <div className="temperatureMesssage"> 
          <h2>Watiting for input...</h2>
        </div>
      );
    }
    
    return (
      <div className="temperatureMesssage">
        <h2>{celsius} Celsius is {fahrenheit} Farhenheit</h2>
      </div>
      <br/>
      <div className="temperatureMesssage">
      <h2>{celsius} Celsius is {kelvin} Kelvin</h2>
      </div>);
  };
}


class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.handleKelvinChange = this.handleKelvinChange.bind(this);
    this.state = {temperature: '', scale: 'c'};
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }

  handleKelvinChange(temperature) {
    this.setState({scale: 'k', temperature});
  }

  render() {
    const calc = new TemperatureCalculations();

    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? calc.tryConvert(temperature, calc.toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? calc.tryConvert(temperature, calc.toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
          <hr/>
          <TemperatureMessage celsius={celsius} fahrenheit={fahrenheit} />
        <TemperatureInput
          scale="k"
          temperature={kelvin}
          onTemperatureChange={this.handleKelvinChange} />
          <hr/>
          <TemperatureMessage celsius={celsius} fahrenheit={kelvin} />
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
          <h1 className="App-title">Welcome to Celcius to Farhenheit Calculator!</h1>
        </header>
        
        <div className="App-form">
          {/* <Convert />
          <ShowFarenheit value="0" /> */}
          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;