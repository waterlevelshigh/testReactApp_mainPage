import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import WebsiteBanner from './assets/websiteBanner.jpeg';
import sludgePonds from './assets/sludge_ponds2.jpeg';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function MapCarousel() {
  return (
      <Carousel data-bs-theme="dark" className="tw-bg-slate-600 tw-py-1 tw-w-full ">
          <Carousel.Item>
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
                  className="tw-justify-center d-block "
                  src={sludgePonds}
                  alt="First Slide"
                  
              />
              {/* <ExampleCarouselImage text="Second slide" /> */}
              <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item >
              <img
                  className="tw-justify-center"
                  src={WebsiteBanner}
                  alt="First Slide"
                  fluid
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


{/*
    
    
     <div id="mapCarousel"  class="carousel slide py-1 mb-auto" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#mapCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#mapCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#mapCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">


          <div class="carousel-item active">
            <!-- <svg class="bd-placeholder-img" width="100%"  xmlns="http://www.w3.orgorg/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg> -->
           <img src="assets\chemtronicsCarousel.jpeg" height="100%" width="100%"  alt="hmm">
              <div class="carousel-caption">
               <div class="tw-grid tw-grid-cols-4 tw-gap-4 tw-gap-x-20 tw-text-left">
                  <div class="tw-underline tw-text-lg tw-col-span-4">Maps/Documents</div>
                  <!-- <div class="tw-grid tw-grid-rows-subgrid tw-gap-4 tw-row-span-2"></div> -->
                  <div class="tw-text-4xl tw-font-bold tw-col-span-4">Chemtronics</div>
                  <div class="tw-opacity-50 tw-italic tw-col-span-4">This place is wild</div>
                  <div class="tw-col-span-3"><a class="btn btn-md btn-primary tw-rounded-full tw-bg-blue-600" href="#chemtronicsBlurb" target="_self">Learn more</a></div>
                  <div><a class="btn btn-md btn-primary tw-rounded-full tw-bg-blue-600" href="chemtronics_child/index.html" target="_self" >Head to map</a></div>
               </div>
             
              </div>
          </div>


          <div class="carousel-item">
            <img src="assets\sludge_ponds2.jpeg" height="100%" width="100%" alt="">
              <div class="carousel-caption">
                <div class="tw-grid tw-grid-cols-2 tw-gap-4 tw-text-left">
                  <div class="tw-text-4xl tw-italic tw-font-bold tw-py-2">Carlisle Finishing/Cone Mills Inc.</div>
                  <p class="tw-opacity-95 tw-font-semibold tw-italic tw-text-sm tw-indent-20">What on earth is happening with SC Department of Environmental Whatever? They've changed names 3 times in 20 years. The Carlisle Finishing/Cone Mills site in Union County, SC was in operation
                    for over 68 years until its closure in 2020. Where are SC's records?! Community concerns about PFAS in the sludge ponds prompted
                  testing of the sludge in containment ponds. </p>
                  <p><a class="btn btn-md btn-primary" href="#carlisleFinishingBlub">Learn more</a></p>
                  </div>
              </div>
          </div>
          <div class="carousel-item">
            <!-- <svg class="bd-placeholder-img" width="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg> -->
            <div class="container">
              <div class="carousel-caption text-end">
                <h1>One more for good measure.</h1>
                <p>Some representative placeholder content for the third slide of this carousel.</p>
                <p><a class="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
              </div>
            </div>
          </div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#mapCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#mapCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button> 
      </div>

     


    
    
    
    
    */}
