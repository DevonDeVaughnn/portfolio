import React from "react";
import { Col, Container, Row, InputGroup, Form } from "react-bootstrap";
import Jumbotron from "../components/Jumbotron";
import Navi from "../components/Nav";
import Carousel from "../components/Carousel";
import "../App.css";

export default function Home() {
  return (
    <Container>
      <Col className="lg-12">
        <Navi />
        <Jumbotron />
        <Carousel />
      </Col>
    </Container>
  );
}
