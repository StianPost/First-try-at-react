import Container from 'react-bootstrap/Container';
import React from 'react';

function Footer() {
  return (
    <div className='footer'>
      <Container>
        <div className='footer__bottom'>
          <p className='footer__left'>
            <i className='fab fa-vimeo-v'></i>
            <i className='fab fa-youtube'></i>
          </p>
          <p>hello@yay.com</p>
          <p>Copyright 2020</p>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
