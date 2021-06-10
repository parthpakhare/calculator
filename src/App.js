import React, { useState, useEffect, useRef } from 'react';

import classes from './App.module.css';
import Logo from './backspace.svg';

const App = () => {

  const [result, setResult] = useState("")
  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus())

  const inputHandler  = (e) => {
    setResult("")
    setResult(() => result.concat(e.target.name))
  }

  const resultHandler = () => {
    try{
      setResult(eval(result).toFixed(2))
    } catch(error){
      alert("Input Invalid")
    }
  }

  const backspaceHandler = () => {
    setResult(result.slice(0, result.length - 1))
  }

  const clearHandler = () => {
    setResult("")
  }

  return (
    <div className={classes.App}>
      <div className={classes.CalcContainer}>
        <form>
          <input type="text" 
            className={classes.Display} 
            value={result} 
            ref={inputRef}
            onChange={(e) => e.preventDefault()}
            readOnly></input>
        </form>
        <div className={classes.Inputs}>
          <button id={classes.Clear} onClick={clearHandler}>Clear</button>
          <button id={classes.Backspace} onClick={backspaceHandler}><img src={Logo} alt="C"/></button>
          <button name="/" onClick={inputHandler} id={classes.Operator}>/</button>
          <button name="1" onClick={inputHandler}>1</button>
          <button name="2" onClick={inputHandler}>2</button>
          <button name="3" onClick={inputHandler}>3</button>
          <button name="*" onClick={inputHandler} id={classes.Operator}>X</button>
          <button name="4" onClick={inputHandler}>4</button>
          <button name="5" onClick={inputHandler}>5</button>
          <button name="6" onClick={inputHandler}>6</button>
          <button name="-" onClick={inputHandler} id={classes.Operator}>-</button>
          <button name="7" onClick={inputHandler}>7</button>
          <button name="8" onClick={inputHandler}>8</button>
          <button name="9" onClick={inputHandler}>9</button>
          <button name="+" onClick={inputHandler} id={classes.Operator}>+</button>
          <button name="." onClick={inputHandler}>.</button>
          <button name="0" onClick={inputHandler}>0</button>
          <button name="=" onClick={resultHandler} id={classes.Enter}>=</button>

        </div>
      </div>
    </div>
  );
}

export default App;
