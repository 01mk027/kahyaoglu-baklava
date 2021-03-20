import React from 'react';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
function NavBar() {
  return(<>
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand>
      <NavLink exact to='/' className="nav-item nav-link text-success">
                <strong>Kahyaoğlu Baklava</strong>
              </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <NavLink exact to='/' className="nav-item nav-link active text-light">
           <i>Ana Sayfa</i>
        </NavLink>
        <NavLink to='/about' className="nav-item nav-link active text-light">
           <i>Resimler</i>
        </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>






  </>);
}
export default NavBar;
