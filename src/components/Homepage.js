import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import car1 from '../Carousel images/carousel-1.jpg';
import car2 from '../Carousel images/carousel-2.jpg';
import car3 from '../Carousel images/carousel-3.jpg';
import tabImg from '../Tab images/tab-1.jpg';
import tabImg2 from '../Tab images/tab-2.jpg';
import tabImg3 from '../Tab images/tab-3.jpg';

function Header() {
  return (
    <div className='Homepage'>
      <Container fluid>
        <Carousel>
          <Carousel.Item>
            <img className='d-block w-100' src={car1} alt='First slide' />
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100' src={car2} alt='Second slide' />
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100' src={car3} alt='Third slide' />
          </Carousel.Item>
        </Carousel>
      </Container>
      <Container>
        <div className='homeIntro'>
          <h1 className='homeIntro__heading'>We do YAY things</h1>
          <p className='homeIntro__subtext'>
            Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi,
            a rutrum justo eros pretium libero. Nullam vel enim id mauris
            eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu
            sit amet, consectetur faucibus urna. Suspendisse massa diam,
            efficitur eu massa euismod, pretium lacinia magna. Donec mi orci,
            sollicitudin in luctus a, varius eget massa.
          </p>
        </div>
        <div className='d-none d-lg-block'>
          <Tabs defaultActiveKey='first'>
            <Tab className='cardTab' eventKey='first' title='First'>
              <div className='cardTab__content'>
                <img className='cardTab__img' src={tabImg} />
                <div>
                  <p>
                    Morbi eget efficitur turpis. Vivamus pellentesque tortor
                    massa, venenatis pharetra leo laoreet a. Nullam non eleifend
                    justo, a ullamcorper turpis. Cras vehicula pharetra lectus
                    non maximus. Sed condimentum mattis rhoncus.{' '}
                  </p>
                  <div>
                    <p className='cardTab__links'>
                      SHARE<i className='fab fa-facebook-f'></i>
                      <i className='fab fa-twitter'></i>
                    </p>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab className='cardTab' eventKey='second' title='Second'>
              <div className='cardTab__content'>
                <img className='cardTab__img' src={tabImg2} />
                <div>
                  <p>
                    Morbi eget efficitur turpis. Vivamus pellentesque tortor
                    massa, venenatis pharetra leo laoreet a. Nullam non eleifend
                    justo, a ullamcorper turpis. Cras vehicula pharetra lectus
                    non maximus. Sed condimentum mattis rhoncus.{' '}
                  </p>
                  <div>
                    <p className='cardTab__links'>
                      SHARE<i className='fab fa-facebook-f'></i>
                      <i className='fab fa-twitter'></i>
                    </p>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab className='cardTab' eventKey='third' title='Third'>
              <div className='cardTab__content'>
                <img className='cardTab__img' src={tabImg3} />
                <div>
                  <p>
                    Morbi eget efficitur turpis. Vivamus pellentesque tortor
                    massa, venenatis pharetra leo laoreet a. Nullam non eleifend
                    justo, a ullamcorper turpis. Cras vehicula pharetra lectus
                    non maximus. Sed condimentum mattis rhoncus.{' '}
                  </p>
                  <div>
                    <p className='cardTab__links'>
                      SHARE<i className='fab fa-facebook-f'></i>
                      <i className='fab fa-twitter'></i>
                    </p>
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
        <div className='d-lg-none'>
          <Accordion defaultActiveKey='0'>
            <Accordion.Item eventKey='0'>
              <Accordion.Header>First</Accordion.Header>
              <Accordion.Body>
                <div className='cardAccordian'>
                  <p>
                    Morbi eget efficitur turpis. Vivamus pellentesque tortor
                    massa, venenatis pharetra leo laoreet a. Nullam non eleifend
                    justo, a ullamcorper turpis. Cras vehicula pharetra lectus
                    non maximus. Sed condimentum mattis rhoncus.
                  </p>
                  <img className='cardAccordian__img' src={tabImg} />
                  <p className='cardAccordian__links'>
                    SHARE <i className='fab fa-facebook-f'></i>
                    <i className='fab fa-twitter'></i>
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='1'>
              <Accordion.Header>Second</Accordion.Header>
              <Accordion.Body>
                <div className='cardAccordian'>
                  <p>
                    Morbi eget efficitur turpis. Vivamus pellentesque tortor
                    massa, venenatis pharetra leo laoreet a. Nullam non eleifend
                    justo, a ullamcorper turpis. Cras vehicula pharetra lectus
                    non maximus. Sed condimentum mattis rhoncus.
                  </p>
                  <img className='cardAccordian__img' src={tabImg2} />
                  <p className='cardAccordian__links'>
                    SHARE <i className='fab fa-facebook-f'></i>
                    <i className='fab fa-twitter'></i>
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='2'>
              <Accordion.Header>Third</Accordion.Header>
              <Accordion.Body>
                <div className='cardAccordian'>
                  <p>
                    Morbi eget efficitur turpis. Vivamus pellentesque tortor
                    massa, venenatis pharetra leo laoreet a. Nullam non eleifend
                    justo, a ullamcorper turpis. Cras vehicula pharetra lectus
                    non maximus. Sed condimentum mattis rhoncus.
                  </p>
                  <img className='cardAccordian__img' src={tabImg3} />
                  <p className='cardAccordian__links'>
                    SHARE <i className='fab fa-facebook-f'></i>
                    <i className='fab fa-twitter'></i>
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Container>
    </div>
  );
}

export default Header;
