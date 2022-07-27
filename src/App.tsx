import "./App.css";
import { useState, useEffect } from "react";
import {
  redColor,
  blueColor,
  disabledColor,
  replaceCamelWithSpaces,
} from "./utils";
import SummaryForm from "./pages/summary/SummaryForm";
import OrderEntry from "./pages/entry/OrderEntry";
import { OrderDetailsProvider } from "./contexts/OrderDetails";
import { Container } from "react-bootstrap";

function App() {
  const [buttonColor, setButtonColor] = useState(redColor);
  const [disabled, setdisabled] = useState(false);

  const newButtonColor = buttonColor === redColor ? blueColor : redColor;

  return (
    <Container>
      <OrderDetailsProvider>
        <OrderEntry />
        {/* <SummaryForm /> */}
      </OrderDetailsProvider>
    </Container>
  );
}

export default App;
