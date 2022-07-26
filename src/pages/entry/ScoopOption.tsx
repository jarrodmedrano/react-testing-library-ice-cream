import Col from "react-bootstrap/Col";
import { IProps } from "./Options";

export default function ScoopOption({ name, imagePath }: IProps) {
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <img src={`http://localhost:3030/${imagePath}`} alt={`${name} scoop`} />
    </Col>
  );
}
