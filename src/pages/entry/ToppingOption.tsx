import Col from 'react-bootstrap/Col';
import { IProps } from './Options';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function ToppingOption({
  name,
  imagePath,
  updateItemCount,
}: IProps) {
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }}>
      <img src={`http://localhost:3031/${imagePath}`} alt={`${name} topping`} />
      <Form.Group controlId={`${name}-topping-checkbox`}>
        <Form.Check
          type="checkbox"
          onChange={(e) => {
            updateItemCount(name, e.target.checked ? 1 : 0, 'toppings');
          }}
          label={name}
        />
      </Form.Group>
    </Col>
  );
}
