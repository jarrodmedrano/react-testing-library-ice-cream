import './App.css';
import { useState, useEffect } from 'react';
import {
  redColor,
  blueColor,
  disabledColor,
  replaceCamelWithSpaces,
} from './utils';
import SummaryForm from './pages/summary/SummaryForm';
import OrderEntry from './pages/entry/OrderEntry';
import { OrderDetailsProvider } from './contexts/OrderDetails';
import { Container } from 'react-bootstrap';
import OrderSummary from './pages/summary/OrderSummary';
import OrderConfirmation from './pages/confirmation/OrderConfirmation';

function App() {
  // orderPhase needs to be 'inProgress', 'review' or 'completed'
  const [orderPhase, setOrderPhase] = useState('inProgress');

  let Component = OrderEntry; // default to order page
  switch (orderPhase) {
    case 'inProgress':
      Component = OrderEntry;
      break;
    case 'review':
      Component = OrderSummary;
      break;
    case 'completed':
      Component = OrderConfirmation;
      break;
    default:
  }

  const [buttonColor, setButtonColor] = useState(redColor);
  const [disabled, setdisabled] = useState(false);

  const newButtonColor = buttonColor === redColor ? blueColor : redColor;

  return (
    <OrderDetailsProvider>
      <Container>{<Component setOrderPhase={setOrderPhase} />}</Container>
    </OrderDetailsProvider>
  );
}

export default App;
