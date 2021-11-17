import React from "react";
import { Component } from "react";
import { Container, Nav, Navbar, NavDropdown, Dropdown, DropdownButton } from "react-bootstrap";
import { Link } from 'react-router-dom'
import "../App.css";
import "../componentStyles/Navbar.css";

class Navbarr extends Component {
  render() {
    return (
      <Navbar bg="" variant="dark" expand="lg">
        <Container fluid>
          <Link to="/">
            <img
              src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
              alt=""
              width="150px"
              height="70px"
              class="pt-1 mt-1 mr-2 "
            />
          </Link>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            className="navbarrtoggle"
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/">
                <span className="nav-link text-secondary">Home</span>
              </Link>
              <Link to="/tv-shows">
                <span className="nav-link text-secondary">TV Shows</span>
              </Link>
              <Link to="/movies">
                <span className="nav-link text-secondary">Movies</span>
              </Link>
              <Link to="/recently-added">
                <span className="nav-link text-secondary">Recently Added</span>
              </Link>
              <Link to="/my-list">
                <span className="nav-link text-secondary">My List</span>
              </Link>
            </Nav>
          </Navbar.Collapse>
          <div class="right-icons row">
            <i class="fas fa-search m-3"></i>
            <p class="text-secondary pt-2 m-1">KIDS</p>
            <i class="fas fa-bell search-icon col p-3 "></i>
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png"
              alt=""
              width="38px"
              height="34px"
              class="mt-1 mr-2 "
            />

            <div>
              <DropdownButton
                align="end"
                id="dropdown-menu-align-end"
                variant="dark"
                className="dropleft"
              >
                <Dropdown.Item eventKey="1">User 1</Dropdown.Item>
                <Dropdown.Item eventKey="2">User 2</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
        </Container>
      </Navbar>
    );
  }
}
export default Navbarr;
