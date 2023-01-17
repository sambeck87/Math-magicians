import '../styles/calculator.css';
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
      <div id="calc_container">
        <h2 id="lets">Let&apos;s do some math!</h2>
        <div id="calculator">
          <Displayer total={total} next={next} operation={operation} />
          <button className="smallButton" type="button" onClick={clickHandler}>AC</button>
          <button className="smallButton" type="button" onClick={clickHandler}>+/-</button>
          <button className="smallButton" type="button" onClick={clickHandler}>%</button>
          <button className="smallButton operators" type="button" onClick={clickHandler}>&#247;</button>
          <button className="smallButton" type="button" onClick={clickHandler}>7</button>
          <button className="smallButton" type="button" onClick={clickHandler}>8</button>
          <button className="smallButton" type="button" onClick={clickHandler}>9</button>
          <button className="smallButton operators" type="button" onClick={clickHandler}>x</button>
          <button className="smallButton" type="button" onClick={clickHandler}>4</button>
          <button className="smallButton" type="button" onClick={clickHandler}>5</button>
          <button className="smallButton" type="button" onClick={clickHandler}>6</button>
          <button className="smallButton operators" type="button" onClick={clickHandler}>-</button>
          <button className="smallButton" type="button" onClick={clickHandler}>1</button>
          <button className="smallButton" type="button" onClick={clickHandler}>2</button>
          <button className="smallButton" type="button" onClick={clickHandler}>3</button>
          <button className="smallButton operators" type="button" onClick={clickHandler}>+</button>
          <button id="zero" type="button" onClick={clickHandler}>0</button>
          <button className="smallButton" type="button" onClick={clickHandler}>.</button>
          <button className="smallButton operators" type="button" onClick={clickHandler}>=</button>
        </div>
      </div>
    </>
  );
};

export default Calc;
