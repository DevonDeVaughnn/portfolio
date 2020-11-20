import "./style.css";
import React, { Link } from "react";
import { useState } from "react-dom";

import {
  Col,
  Container,
  Row,
  InputGroup,
  Form,
  Navbar,
  Badge,
  Nav,
  FormControl,
  Button,
  Carousel,
} from "react-bootstrap";
const projectImg =
  "https://images.pexels.com/photos/1229042/pexels-photo-1229042.jpeg";

function ProjectCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={projectImg} alt="First slide" />
        <Carousel.Caption>
          <h3>Covid-19 Tracking App</h3>
          <p>
            An app that provides information on testing centers, active cases,
            hazardous areas and Covid-19 related deaths.
          </p>
          <p>Role: Backend</p>
          <a
            href="https://jjainga.github.io/Covid-19-Resource-Page/"
            target="blank"
          >
            Please click to visit
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={projectImg} alt="Third slide" />
        <Carousel.Caption>
          <h3>Pocket Butler</h3>
          <p>An app that helps keep track of scheeduled tasks .</p>
          <p>Role: Backend</p>
          <a href="https://jjainga.github.io/Covid-19-Resource-Page/">
            Please click to visit.
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={projectImg} alt="Third slide" />
        <Carousel.Caption>
          <h3>SMKR (Coming Soon)</h3>
          <p>
            SMKR is an app for marijuana enthusiasts. It provides basic
            information of close to 2000 strains. You can like them and save it
            to your profile or recommend any of the variety of strains.
          </p>
          <p>Role: Project Manager</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProjectCarousel;
