import React, { Component } from "react";
import "./Sidebar.css";
import { HashLink as Link } from "react-router-hash-link";

import logo from "../images/My-logo4.ico";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <img src={logo} />
        <h1>
          <Link smooth to="/#start" className="h1_links">
            Sachin Mittal
          </Link>
        </h1>
        <p style={{ color: "black", fontWeight: "bold" }} className="gmail">
          {" "}
          eiman.h.zarrinh@gmail.com@gmail.com{" "}
        </p>
        <ul className="sidebar-nav">
          <li className="sidebar-nav-items">
            <Link smooth to="/#about" className="links">
              About
            </Link>
          </li>
          <li className="sidebar-nav-items">
            <Link smooth to="/#education" className="links">
              Education
            </Link>
          </li>
          <li className="sidebar-nav-items">
            <Link smooth to="/#interest" className="links">
              Interest
            </Link>
          </li>
          {/* <li className="sidebar-nav-items"><a href="http://www.bloggingpeek.com" target="_blank" rel="opener noreferrer" className="links"> Blog<FiExternalLink/></a></li> */}
        </ul>

        <div className="flip-card-back">
          <ul className="sidebar-nav">
            <li className="sidebar-nav-icons">
              <a
                href="https://www.linkedin.com/in/sachin-mittal-476174158?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BoRhF2EUsQJ%2BygJpLEZb%2FFA%3D%3D"
                rel="opener noreferrer"
                target="_blank"
                class="fa fas fa-linkedin fa-lg"
              ></a>
            </li>
            <li className="sidebar-nav-icons">
              {" "}
              <a
                href="https://github.com/mittalsam98"
                rel="opener noreferrer"
                target="_blank"
                class="fa fas fa-github fa-lg"
              ></a>
            </li>

            <li className="sidebar-nav-icons">
              {" "}
              <a
                href="mailto:eiman.h.zarrinh@gmail.com@gmail.com"
                rel="opener noreferrer"
                target="_blank"
                class="fa fas fa-envelope fa-lg"
              ></a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
