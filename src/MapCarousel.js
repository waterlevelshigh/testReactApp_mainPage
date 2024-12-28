import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import WebsiteBanner from './assets/websiteBanner.jpeg';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function MapCarousel() {
  return (
      <Carousel data-bs-theme="dark" className="tw-bg-slate-600 tw-py-1">
          <Carousel.Item>
              {/* <ExampleCarouselImage text="First slide" /> */}
              <img
              className="tw-justify-center"
              src={WebsiteBanner}
              alt="First Slide"
              />
              <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
              <img
                  className="tw-justify-center"
                  src={WebsiteBanner}
                  alt="First Slide"
              />
              {/* <ExampleCarouselImage text="Second slide" /> */}
              <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
              <img
                  className="tw-justify-center"
                  src={WebsiteBanner}
                  alt="First Slide"
              />
              {/* <ExampleCarouselImage text="Third slide" /> */}
              <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
              </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
  )
}

export default MapCarousel;
