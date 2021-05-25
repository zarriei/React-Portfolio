import React, { Component } from "react";
import classes from "./about.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

class About extends Component {
  render() {
    return (
      <div className={classes.box} id="about">
        <ScrollAnimation
          offset="0"
          animateIn="fadeInLeft"
          duration="2.4"
          animateOnce="true"
          initiallyVisible={true}
        >
          <span className={classes.head}>ABOUT ME</span>
          <h2 className={classes.heading}>Who Am I?</h2>
          <div className={classes.About}>
            <p>
              {" "}
              My name is Eiman Zarrinhonar and I am currently pursuing my
              certificate in full-stack development from Georgia Institute of
              Engineering and Technology. I want to become a developer as I am
              interested in innovating and creating new and intriguing things.
              :){" "}
            </p>
            <p className={classes.br}>
              I love exploring new technologies and learning new libraries.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default About;
