import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import React from 'react';

function Newscards(props) {
  let newsItem = props.newsProps.map((item, index) => {
    return (
      <Col>
        <Card className='newsCard'>
          <Card.Body>
            <Card.Img variant='top' src={item.img} />
            <Card.Title className='newsCard__header'>
              Nunc porttitor vel
            </Card.Title>
            <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
            <Button className='btn btn__cardNews' variant='primary'>
              More
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  });
  return newsItem;
}

export default Newscards;
