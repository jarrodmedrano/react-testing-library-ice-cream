import Button from "react-bootstrap/Button";
import Options from "./Options";
import { useOrderDetails } from "../../contexts/OrderDetails";

export default function OrderEntry() {
  const [orderDetails] = useOrderDetails();
  const orderDisabled = orderDetails.totals.scoops === "$0.00";

  return (
    <div>
      <Options optionType="scoops"></Options>
      <Options optionType="toppings"></Options>
      <h2>Grand total: {orderDetails.totals.grandTotal}</h2>
      <Button disabled={orderDisabled}>Order Sundae!</Button>
    </div>
  );
}
