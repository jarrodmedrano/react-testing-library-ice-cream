import './App.css'
import { useState, useEffect } from 'react';
import { redColor, blueColor, disabledColor, replaceCamelWithSpaces } from './utils';
import SummaryForm from './pages/summary/SummaryForm';

function App() {

  const [ buttonColor, setButtonColor ] = useState(redColor);
  const [ disabled, setdisabled ] = useState(false);
  
  const newButtonColor = buttonColor === redColor ? blueColor : redColor;


  return (
    <div>
        <button
        style={{backgroundColor: disabled ? disabledColor : buttonColor, color: 'white'}}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >Change to {replaceCamelWithSpaces(newButtonColor)}</button>
    <br />
    <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={(e) => setdisabled(e.target.checked)} />
      <label htmlFor="disable-button-checkbox">Disable Button</label>

      <SummaryForm />
    </div>  
  );
}

export default App;