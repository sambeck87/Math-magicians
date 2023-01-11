import '../App.css';
import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Displayer from './Displayer';

const Calc = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const clickHandler = (e) => { setState(calculate(state, e.target.innerHTML)); };
  const { total, next, operation } = state;

  return (
    <>
      <Displayer total={total} next={next} operation={operation} />
      <button className="smallButton" id="clear" type="button" onClick={clickHandler}>AC</button>
      <button className="smallButton" id="negative" type="button" onClick={clickHandler}>+/-</button>
      <button className="smallButton" id="percent" type="button" onClick={clickHandler}>%</button>
      <button className="smallButton operators" id="divisor" type="button" onClick={clickHandler}>&#247;</button>
      <button className="smallButton" id="seven" type="button" onClick={clickHandler}>7</button>
      <button className="smallButton" id="eigth" type="button" onClick={clickHandler}>8</button>
      <button className="smallButton" id="nine" type="button" onClick={clickHandler}>9</button>
      <button className="smallButton operators" id="multiplier" type="button" onClick={clickHandler}>x</button>
      <button className="smallButton" id="four" type="button" onClick={clickHandler}>4</button>
      <button className="smallButton" id="five" type="button" onClick={clickHandler}>5</button>
      <button className="smallButton" id="six" type="button" onClick={clickHandler}>6</button>
      <button className="smallButton operators" id="minus" type="button" onClick={clickHandler}>-</button>
      <button className="smallButton" id="one" type="button" onClick={clickHandler}>1</button>
      <button className="smallButton" id="two" type="button" onClick={clickHandler}>2</button>
      <button className="smallButton" id="three" type="button" onClick={clickHandler}>3</button>
      <button className="smallButton operators" id="plus" type="button" onClick={clickHandler}>+</button>
      <button id="zero" type="button" onClick={clickHandler}>0</button>
      <button className="smallButton" id="dot" type="button" onClick={clickHandler}>.</button>
      <button className="smallButton operators" id="equal" type="button" onClick={clickHandler}>=</button>
    </>
  );
};

export default Calc;
