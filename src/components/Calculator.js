import '../App.css';
import React from 'react';
import calculate from '../logic/calculate';

class Calc extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  clickHandler = (e) => {
    const button = e.target.innerHTML;
    const result = calculate(this.state, button);
    this.setState(result);
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <>
        <div id="screen" type="number">
          {total}
          {operation}
          {next}
        </div>
        <button className="smallButton" id="clear" type="button" onClick={this.clickHandler}>AC</button>
        <button className="smallButton" id="negative" type="button" onClick={this.clickHandler}>+/-</button>
        <button className="smallButton" id="percent" type="button" onClick={this.clickHandler}>%</button>
        <button className="smallButton operators" id="divisor" type="button" onClick={this.clickHandler}>&#247;</button>
        <button className="smallButton" id="seven" type="button" onClick={this.clickHandler}>7</button>
        <button className="smallButton" id="eigth" type="button" onClick={this.clickHandler}>8</button>
        <button className="smallButton" id="nine" type="button" onClick={this.clickHandler}>9</button>
        <button className="smallButton operators" id="multiplier" type="button" onClick={this.clickHandler}>x</button>
        <button className="smallButton" id="four" type="button" onClick={this.clickHandler}>4</button>
        <button className="smallButton" id="five" type="button" onClick={this.clickHandler}>5</button>
        <button className="smallButton" id="six" type="button" onClick={this.clickHandler}>6</button>
        <button className="smallButton operators" id="minus" type="button" onClick={this.clickHandler}>-</button>
        <button className="smallButton" id="one" type="button" onClick={this.clickHandler}>1</button>
        <button className="smallButton" id="two" type="button" onClick={this.clickHandler}>2</button>
        <button className="smallButton" id="three" type="button" onClick={this.clickHandler}>3</button>
        <button className="smallButton operators" id="plus" type="button" onClick={this.clickHandler}>+</button>
        <button id="zero" type="button" onClick={this.clickHandler}>0</button>
        <button className="smallButton" id="dot" type="button" onClick={this.clickHandler}>.</button>
        <button className="smallButton operators" id="equal" type="button" onClick={this.clickHandler}>=</button>
      </>
    );
  }
}

export default Calc;
