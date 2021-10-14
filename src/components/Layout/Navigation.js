import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';

function Navigation(props) {
  return (
    <Navbar className='headerBar' expand='lg'>
      <Container className='headerBar__container'>
        <Navbar.Brand href='/'>The YAY Company</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse className='headerSearch' id='navbarScroll'>
          <Nav
            className='d-lg-none navLink__drownDown'
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Link className='navLink__mobile navLink__mobile--active' to='/'>
              Home
            </Link>
            <Link className='navLink__mobile' to='/News'>
              News
            </Link>
            <Link className='navLink__mobile' to='/Contact'>
              Contact
            </Link>
          </Nav>
          <Nav
            className='d-none d-lg-block'
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Link className='navLink--active navLink' to='/'>
              Home
            </Link>
            <Link className='navLink' to='/News'>
              News
            </Link>
            <Link className='navLink' to='/Contact'>
              Contact
            </Link>
          </Nav>
          <Form className='d-flex searchBar__form'>
            <FormControl
              className='searchBar__header'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <Button className='btn btn--search' variant='outline-success'>
              Go
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
