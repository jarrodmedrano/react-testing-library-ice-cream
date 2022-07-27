import axios from "axios";
import { ReactElement, useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import ScoopOption from "./ScoopOption";
import ToppingOption from "./ToppingOption";
import AlertBanner from "../common/AlertBanner";
export interface IProps {
  name: string;
  key: string;
  imagePath: string;
}

export default function Options({ optionType }: { optionType: string }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
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
    optionType === "scoops" ? ScoopOption : ToppingOption;

  const optionItems = items.map((item: { name: string; imagePath: string }) => {
    return (
      <ItemComponent
        key={item.name}
        name={item.name}
        imagePath={item.imagePath}
      />
    );
  });

  return <Row>{optionItems}</Row>;
}
