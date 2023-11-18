import React from "react";
import { Container, Navbar, NavbarBrand } from "react-bootstrap";

const NavbarSec = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavbarBrand href="#">News Update</NavbarBrand>
      </Container>
    </Navbar>
  );
};

export default NavbarSec;
