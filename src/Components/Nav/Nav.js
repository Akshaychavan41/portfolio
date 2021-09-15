import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav as Navb } from "react-bootstrap";
import { Fade } from "react-reveal";
import "./Nav.css";
import "bootstrap/dist/css/bootstrap.min.css";
function Nav(props) {
  const [show, handleShow] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const transitionNavbar = () => {
    if (window.scrollY > window.innerHeight) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  const handleScroll = (page) => {
    setExpanded(false);
    document.getElementById(page).scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    // return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);
  return (
    // <Fade top>
    //   <div className={`nav ${show && "nav__black"}`}>
    //     <h2 className="nav__title">Akshay Chavan</h2>
    //     <div className="nav__links">
    //       <h3 onClick={() => handleScroll("about")}>About</h3>
    //       <h3 onClick={() => handleScroll("skills")}>Skills</h3>
    //       <h3 onClick={() => handleScroll("exp")}>Experience</h3>
    //       <h3 onClick={() => handleScroll("project")}>Projects</h3>
    //     </div>
    //   </div>
    // </Fade>
    <Navbar
      fixed="top"
      expanded={expanded}
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand>Akshay Chavan</Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setExpanded(expanded ? false : "expanded")}
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse
          style={{ width: "100%" }}
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Navb style={{ width: "100%" }} className="justify-content-end">
            <Navb.Link onClick={() => handleScroll("about")}>About</Navb.Link>
            <Navb.Link onClick={() => handleScroll("skills")}>Skills</Navb.Link>
            <Navb.Link onClick={() => handleScroll("exp")}>
              Experience
            </Navb.Link>
            <Navb.Link onClick={() => handleScroll("project")}>
              Projects
            </Navb.Link>
          </Navb>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;
