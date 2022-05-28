import React from "react";
import { Container, FormControl, Navbar, NavDropdown } from "react-bootstrap";
import { CartState } from "../context/Context";

const Header = () => {
  const {
    state: { cart },
  } = CartState();

  return (
    <Navbar bg="dark" variant="dark" style={{ height: "80px" }}>
      <Container>
        <Navbar.Brand>MASAI CART</Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="Search a product..."
            className="m-auto"
          />
        </Navbar.Text>
        <NavDropdown title="Cart" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">
            Something else here
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Container>
    </Navbar>
  );
};

export default Header;
