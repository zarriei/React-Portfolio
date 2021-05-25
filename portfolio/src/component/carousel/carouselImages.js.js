import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import classes from "./carouselImages.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "animate.css/animate.min.css";
import { GoProject } from "react-icons/go";
import { FaArrowCircleDown } from "react-icons/fa";
import Hello from "../images/Hello.jpg";
import Dreams from "../images/";

class CarouselImages extends Component {
  render() {
    return (
      <div className={classes.carousel_container} id="start">
        {/* <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}> */}
        <Carousel
          className={classes.carousel}
          dynamicHeight
          infiniteLoop={true}
          interval={6000}
          useKeyboardArrows={true}
          transitionTime={1700}
          emulateTouch
          showArrows={false}
          autoPlay
          showStatus={false}
          showThumbs={false}
        >
          <div className={classes.image_container}>
            <img className={classes.image} src={Hello} alt="myImage" />
            <div className={classes.h1}>
              <h1>I'm Sachin</h1>
              <a
                href="https://drive.google.com/open?id=1UEYXr47N9yD_9JxY457Vul4BwRizNVfv"
                rel="opener noreferrer"
                target="_blank"
              >
                VIEW CV <FaArrowCircleDown />
              </a>
            </div>
          </div>
          <div className={classes.image_container}>
            <img className={classes.image} src={Dreams} alt="myImage" />
            <div className={classes.h2}>
              <h1> I love building</h1>
              <h1>THINGS!!</h1>
              <a
                href="https://github.com/zarriei"
                rel="opener noreferrer"
                target="_blank"
              >
                VIEW PROJECTS <GoProject />
              </a>
            </div>
          </div>
          {/* <div className={classes.image_container}>
                    <img className={classes.image} src={laptop1} alt="myImage"/>
                    <div  className={classes.h1}> 
                    </div>
                </div> */}
        </Carousel>
        {/* </ScrollAnimation> */}
      </div>
    );
  }
}
export default CarouselImages;
