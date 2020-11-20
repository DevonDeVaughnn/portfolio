import "./style.css";
import {
  Col,
  Container,
  Row,
  InputGroup,
  Form,
  Jumbotron,
  Navbar,
  Badge,
  Nav,
  FormControl,
  Button,
} from "react-bootstrap";

export default function Jumbo() {
  return (
    <>
      <Jumbotron fluid>
        <h1>Welcome to my Portfolio</h1>
        <p>Please take a look at my projects. I appreciate your interest.</p>
      </Jumbotron>
    </>
  );
}
