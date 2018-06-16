import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

<div id="root"></div>
class App extends Component {
  render() {

    const Logo = () => (
      <header className="App-header">
        <img src="https://codeyourfuture.io/static/media/cyf_brand.fbcea877.png" className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to CYF HOTEL </h1>
      </header>
    );
// class BookingsMessage extends Component { 
    const BookingsMessage = () => (
      <p className="App-intro">
        There are bookings available for {new Date().toLocaleDateString()}
      </p>
    );
 
    const SpecialDeals = () => {
      const SpecialsDealStrings = ['bananas', 'chocalates', 'lettuce', 'oranges', 'bread']

      return (
        <div>
          {SpecialsDealStrings.map((name) => (
            <p>{name}</p>
          ))}
        </div>
      )
    };

    return (
      <div className="App">
        <Logo />
        <BookingsMessage />
        <SpecialDeals/>
      </div>
    );
  }
}
// }

export default App;

