import React, { Component } from "react";
import classes from "./Interest.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

class Interest extends Component {
  render() {
    return (
      <div className={classes.box} id="interest">
        <ScrollAnimation
          offset="0"
          animateIn="fadeInLeft"
          duration="2.4"
          animateOnce="true"
          initiallyVisible={true}
        >
          <span className={classes.head}>WHAT I DO?</span>
          <h2 className={classes.heading}>HERE ARE SOME OF MY EXPERTISE</h2>
          <div className={classes.Interest}>
            <ScrollAnimation
              offset="0"
              animateIn="fadeInLeft"
              duration="2.4"
              animateOnce="true"
              initiallyVisible={true}
            >
              <div className={classes.web}>
                <h3>APP Develpoment</h3>
                <p>
                  I have a high interest in Angular and React. Other than coding
                  one of my biggest interest consists of traveling and seeing
                  the world. and soaking in the different cultures and ways of
                  life.{" "}
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              offset="0"
              animateIn="fadeInLeft"
              duration="2.4"
              animateOnce="true"
              initiallyVisible={true}
            >
              <div className={classes.app}>
                <h3>Web Develpoment</h3>
                <p>
                  I am a full stack web developer(MERN) and build websites using
                  HTML, CSS, Javascript, ReactJs.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              offset="0"
              animateIn="fadeInLeft"
              duration="2.4"
              animateOnce="true"
              initiallyVisible={true}
            ></ScrollAnimation>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Interest;
