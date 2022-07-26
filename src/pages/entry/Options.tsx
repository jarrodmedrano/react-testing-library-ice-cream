import axios from "axios";
import { ReactElement, useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import ScoopOption from "./ScoopOption";

export interface IProps {
  name: string;
  key: string;
  imagePath: string;
}

export default function Options({ optionType }: { optionType: string }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => {
        //TODO: handle error response
      });
  }, [optionType]);

  // TODO: replace 'null' with ToppingOption when available
  const ItemComponent: React.FunctionComponent<IProps> =
    optionType === "scoops" ? ScoopOption : ScoopOption;

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
