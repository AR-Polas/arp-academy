import React, { useContext } from 'react';
import { Button, Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom'
import { NavContext } from '../../App';

const NavBar = () => {
  const [navItem,setNavItem] = useContext(NavContext)
  return (
    <Navbar className="navbar" expand="lg">
      <div className="container">
        <Link to="/"  onClick={() => setNavItem('home')}><Navbar.Brand href="#home">ARP ACADEMY</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-5">
            <NavLink exact activeClass="active_page" to="/" onClick={() => setNavItem('home')}>Home</NavLink>
            <NavLink exact activeClass="active_page" to="/courses" onClick={() => setNavItem('courses')}>Courses</NavLink>
            <NavLink exact activeClass="active_page" to="/blog" onClick={() => setNavItem('blog')}>Blog</NavLink>
            <NavLink exact activeClass="active_page" to="/about" onClick={() => setNavItem('about')}>About</NavLink>
          </Nav>
         <Link to="/admission"> <Button className="btn btn-brand px-3">Admission</Button></Link>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavBar;