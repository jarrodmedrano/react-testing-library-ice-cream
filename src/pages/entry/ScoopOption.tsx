import Col from 'react-bootstrap/Col';
import { IProps } from './Options';
import Form from 'react-bootstrap/Form';
import { Row } from 'react-bootstrap';

export default function ScoopOption({
  name,
  imagePath,
  optionType,
  updateItemCount,
}: IProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateItemCount(name, event.currentTarget.value, optionType);
  };
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }}>
      <img
        style={{ width: '75%' }}
        src={`http://localhost:3031/${imagePath}`}
        alt={`${name} scoop`}
      />
      <Form.Group
        controlId={`${name}-count`}
        as={Row}
        style={{ marginTop: '10px' }}
      >
        <Form.Label column xs="6" style={{ textAlign: 'right' }}>
          {name}
        </Form.Label>
        <Col xs="5" style={{ textAlign: 'left' }}>
          <Form.Control
            type="number"
            defaultValue={0}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>
    </Col>
  );
}
