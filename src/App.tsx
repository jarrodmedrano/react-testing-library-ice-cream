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
      <SummaryForm />
    </div>  
  );
}

export default App;