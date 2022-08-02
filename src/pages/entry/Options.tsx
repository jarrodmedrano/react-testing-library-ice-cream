import axios from 'axios';
import { ReactElement, SetStateAction, useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ScoopOption from './ScoopOption';
import ToppingOption from './ToppingOption';
import AlertBanner from '../common/AlertBanner';
import { pricePerItem } from '../../constants';
import { useOrderDetails } from '../../contexts/OrderDetails';
import { formatCurrency } from '../../utilities';
export interface IProps {
  name: string;
  key: string;
  imagePath: string;
  optionType: string;
  updateItemCount: Function;
}

const Options = ({ optionType }: { optionType: string }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  //@ts-ignore
  const [orderDetails, updateItemCount] = useOrderDetails<SetStateAction>();

  useEffect(() => {
    axios
      .get(`http://localhost:3031/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => {
        //TODO: handle error response
        setError(error);
      });
  }, [optionType]);

  if (error) {
    return <AlertBanner />;
  }

  // TODO: replace 'null' with ToppingOption when available
  const ItemComponent: React.FunctionComponent<IProps> =
    optionType === 'scoops' ? ScoopOption : ToppingOption;
  const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();

  const optionItems = items.map(
    (item: { name: string; imagePath: string; updateItemCount: Function }) => {
      return (
        <ItemComponent
          key={item.name}
          name={item.name}
          imagePath={item.imagePath}
          optionType={item.name}
          updateItemCount={updateItemCount}
        />
      );
    }
  );

  return (
    <>
      <h2>{title}</h2>
      <p>{formatCurrency(pricePerItem[optionType])} each</p>
      <p>
        {title} total: {orderDetails.totals[optionType]}
      </p>
      <Row>{optionItems}</Row>
    </>
  );
};

export default Options;
