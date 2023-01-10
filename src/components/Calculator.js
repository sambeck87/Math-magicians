import '../App.css';
import React from 'react';

class Calc extends React.PureComponent {
  render() {
    return (
      <div>
        <div id="screen" type="number">0</div>
        <button className="smallButton" id="clear" type="button">AC</button>
        <button className="smallButton" id="negative" type="button">+/-</button>
        <button className="smallButton" id="percent" type="button">%</button>
        <button className="smallButton operators" id="divisor" type="button">&#247;</button>
        <button className="smallButton" id="seven" type="button">7</button>
        <button className="smallButton" id="eigth" type="button">8</button>
        <button className="smallButton" id="nine" type="button">9</button>
        <button className="smallButton operators" id="multiplier" type="button">x</button>
        <button className="smallButton" id="four" type="button">4</button>
        <button className="smallButton" id="five" type="button">5</button>
        <button className="smallButton" id="six" type="button">6</button>
        <button className="smallButton operators" id="minus" type="button">-</button>
        <button className="smallButton" id="one" type="button">1</button>
        <button className="smallButton" id="two" type="button">2</button>
        <button className="smallButton" id="three" type="button">3</button>
        <button className="smallButton operators" id="plus" type="button">+</button>
        <button id="zero" type="button">0</button>
        <button className="smallButton" id="dot" type="button">.</button>
        <button className="smallButton operators" id="equal" type="button">=</button>
      </div>
    );
  }
}

export default Calc;
