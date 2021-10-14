import React, { useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Newscards from './components/Newscards';
import Row from 'react-bootstrap/Row';
import pic1 from '../../News images/news-1.jpg';
import pic2 from '../../News images/news-2.jpg';
import pic3 from '../../News images/news-3.jpg';
import pic4 from '../../News images/news-4.jpg';
import pic5 from '../../News images/news-5.jpg';
import pic6 from '../../News images/news-6.jpg';
import pic7 from '../../News images/news-7.jpg';
import pic8 from '../../News images/news-8.jpg';

// Custom Imports

function News() {
  useEffect(() => {});

  const newsProps = [
    { img: pic1 },
    { img: pic2 },
    { img: pic3 },
    { img: pic4 },
  ];
  const newsProps2 = [
    { img: pic5 },
    { img: pic6 },
    { img: pic7 },
    { img: pic8 },
  ];

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className='newsH1'>News</h1>
            <ButtonToolbar aria-label='Toolbar with button groups'>
              <ButtonGroup className='me-2' aria-label='First group'>
                <Button className='btn btn__news btn__news--active'>1</Button>{' '}
                <Button className='btn btn__news'>2</Button>{' '}
                <Button className='btn btn__news'>3</Button>
                <Button className='btn btn__news'>4</Button>
              </ButtonGroup>
            </ButtonToolbar>
          </Col>
        </Row>
        <Row className='cardContainer'>
          <Newscards newsProps={newsProps} />
        </Row>
        <div className=' d-none d-lg-block'>
          <Row className='cardContainer'>
            <Newscards newsProps={newsProps2} />
          </Row>
        </div>
        <Row className='btnRow__bottom'>
          <Col>
            <ButtonToolbar aria-label='Toolbar with button groups'>
              <ButtonGroup className='me-2' aria-label='First group'>
                <Button className='btn btn__news btn__news--active'>1</Button>{' '}
                <Button className='btn btn__news'>2</Button>{' '}
                <Button className='btn btn__news'>3</Button>
                <Button className='btn btn__news'>4</Button>
              </ButtonGroup>
            </ButtonToolbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default News;
