import React from "react";
// import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav">
      {/* <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Apicall</Nav.Link>
            <Nav.Link href="/airlines">Airlines </Nav.Link>
            <Nav.Link href="/Api">Postman</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
      <Link to="/">ApiCall</Link>
      <Link to="/airlines">Airlines</Link>
      <Link to="/Api">Postman</Link>
      <Link to="/Country">Countries</Link>
    </div>
  );
};

export default NavBar;
