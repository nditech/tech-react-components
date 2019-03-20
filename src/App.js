import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Routes from "./components/Routes";
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
    DropdownItem } from 'reactstrap';
  
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/login">Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/logout">Logout</NavLink>
                    </NavItem>
                    </Nav>
                </Navbar>
                <Routes />
            </div>
        );
    }    
}

export default App;
