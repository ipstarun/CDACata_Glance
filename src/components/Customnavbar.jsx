import React, { useState } from "react";
import { NavLink as ReactLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import b1 from "../images/cdac-logo.png";
import Floating from "./Floting";

const Customnavbar = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        color="info"
        light="true"
        dark="true"
        full="false"
        expand="md"
        container="fluid"
        fixed="top"
      >
        <NavbarBrand href="/">
          <h4 style={{ textDecoration: "underline dotted" }}>
            CDAC at a Glance{" "}
          </h4>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={ReactLink} to="/about">
                <b>About</b>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={ReactLink} to="/courses">
                <b> Courses</b>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/contact">
                <b>Contact Us</b>
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <b> Login/SingnUp</b>
              </DropdownToggle>
              <DropdownMenu right>
                <NavLink tag={ReactLink} to="/login">
                  <DropdownItem>
                    <b>Login</b>
                  </DropdownItem>
                </NavLink>

                <DropdownItem divider />
                <NavLink tag={ReactLink} to="/signup">
                  <DropdownItem>
                    <b>SignUp</b>
                  </DropdownItem>
                </NavLink>
                <DropdownItem divider />
                <NavLink tag={ReactLink} to="/faculty">
                  <DropdownItem>
                    <b>Faculty Login</b>
                  </DropdownItem>
                </NavLink>
                <DropdownItem divider />
                <NavLink tag={ReactLink} to="/admin">
                  <DropdownItem>
                    <b>Admin Login</b>
                  </DropdownItem>
                </NavLink>
              </DropdownMenu>
            </UncontrolledDropdown>
            {/* <NavItem>
              <NavLink tag={ReactLink} to="/login">
                <b>Login</b>
              </NavLink>
            </NavItem> */}
            {/* <NavItem>
              <NavLink tag={ReactLink} to="/main">
                Main
              </NavLink>
            </NavItem> */}
          </Nav>
        </Collapse>
        <img src={b1} alt="" />
      </Navbar>
      <div>
        <br />
        <br />
        <Floating />
      </div>
    </div>
  );
};

export default Customnavbar;
