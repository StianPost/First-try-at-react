import React, { useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function Contact() {
  useEffect(() => {});
  return (
    <Container>
      <Row className='d-flex flex-wrap-reverse'>
        <Col className='formCol'>
          <h1 className='contactHeader'>Submit your details</h1>
          <div className='formWrap'>
            <Form>
              <Form.Group className='mb-3'>
                <Form.Label className='formWrap__label'>Name</Form.Label>
                <Form.Control type='name' />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label className='formWrap__label'>Email</Form.Label>
                <Form.Control type='email' />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label className='formWrap__label'>Website</Form.Label>
                <InputGroup className='formWrap__website'>
                  <InputGroup.Text className='formWrap__tag'>
                    http://
                  </InputGroup.Text>
                  <FormControl id='inlineFormInputGroupUsername' />
                </InputGroup>
              </Form.Group>

              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlTextarea1'
              >
                <Form.Label className='formWrap__label'>Message</Form.Label>
                <Form.Control
                  className='formWrap__messageArea'
                  as='textarea'
                  rows={3}
                />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Check
                  className='formWrap__checkbox formWrap__label'
                  type='checkbox'
                  label='Allow us to sell your personal details to whomever we want'
                />
              </Form.Group>
              <Button variant='secondary' className='btn btn__form'>
                Submit
              </Button>
            </Form>
          </div>
        </Col>
        <Col>
          <div className='contactInfo'>
            <div className='contactInfo__dividers'>
              <i className='fas contactInfo__icons fa-envelope'></i>
              <p>hello@yay.com</p>
            </div>
            <div className='contactInfo__dividers'>
              <i className='fas contactInfo__icons fa-phone'></i>
              <p>123 456 7890</p>
            </div>
            <div className='contactInfo__dividers'>
              <i className='fas contactInfo__icons contactInfo__icons--gps fa-map-marker-alt'></i>
              <div>
                <p>123 Some Street</p>
                <p>Somewhere</p>
                <p>Some City</p>
                <p>10000</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
