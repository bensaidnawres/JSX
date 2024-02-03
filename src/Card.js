import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Name from './Name';
import Price from './Price';
import Description from './Description';

function ListGroupExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item><Name/></ListGroup.Item>
        <ListGroup.Item><Price/></ListGroup.Item>
        <ListGroup.Item><Description/></ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default ListGroupExample;