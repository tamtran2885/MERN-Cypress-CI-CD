import React from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";
import "./Navigation.css";

const Navigation = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    // console.log("logout");
    dispatch(logout());
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>My Shopping</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* If there is not login */}
            {!user && (
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            )}
            {/* If user */}
            {user && (
              <NavDropdown title={`${user.email}`} id="basic-nav-dropdown">
                {user.isAdmin && (
                  <>
                    <LinkContainer to="/dashboard">
                      <NavDropdown.Item>Dashboard</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/new-product">
                      <NavDropdown.Item>Create New Product</NavDropdown.Item>
                    </LinkContainer>
                  </>
                )}
                {!user.isAdmin && (
                  <>
                    <LinkContainer to="/cart">
                      <NavDropdown.Item>Cart</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/orders">
                      <NavDropdown.Item>My orders</NavDropdown.Item>
                    </LinkContainer>
                  </>
                )}
                <NavDropdown.Divider />
                <Button
                  variant="danger"
                  onClick={handleLogout}
                  className="logout-btn"
                >
                  Logout
                </Button>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
