import "./style.css";
import React from "react";
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
} from "react-bootstrap";

export default function Navi() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Darrian DeVaughn</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link
          href="https://github.com/DevonDeVaughnn?tab=repositories"
          target="blank"
        >
          GitHub
        </Nav.Link>
        <Nav.Link
          href="https://www.linkedin.com/in/devon-devaughn-6919041b3/"
          target="blank"
        >
          LinkedIn
        </Nav.Link>
        <Nav.Link href="#">Resume (Coming Soon)</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  );
}
