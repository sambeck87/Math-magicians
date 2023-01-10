import React from 'react';
import './App.css';
import Calc from './components/Calculator';

class App extends React.PureComponent {
  render() {
    return (
      <React.StrictMode>
        <Calc />
      </React.StrictMode>
    );
  }
}

export default App;
