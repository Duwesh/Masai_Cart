import { Dropdown } from "bootstrap";
import React from "react";
import {
  Container,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { CartState } from "../context/Context";

const Header = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch,
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
            onChange={(e) => {
              productDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              });
            }}
          />
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Header;
