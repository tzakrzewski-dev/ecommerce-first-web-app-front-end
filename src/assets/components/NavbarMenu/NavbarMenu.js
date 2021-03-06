import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
  Container,
  Row,
} from "react-bootstrap";

import logo from "../../images/logo.png";
import "./Navbar.css";

class NavbarMenu extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Link to="/">
              <Navbar.Brand>
                <img
                  src={logo}
                  width="200"
                  height="80"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
            </Link>
            <Nav.Link as={Link} to="/login">
              <span class="material-icons md-48 white ">how_to_reg</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/panier">
              <span class="material-icons md-48 white">add_shopping_cart</span>
            </Nav.Link>
            <Nav.Link
              className="txtmenu my-auto white "
              as={Link}
              to="/produits/ordinateur"
            >
              Ordinateur
            </Nav.Link>
            <Nav.Link
              className="txtmenu my-auto  white"
              as={Link}
              to="/produits/telephone"
            >
              Télephone
            </Nav.Link>
            <Nav className="ml-auto">
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Recherche"
                  className="mr-sm-2"
                />
                <Button variant="outline-info">Recherche</Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarMenu;
