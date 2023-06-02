import React from "react"
import OnlineCourses from "../allcourses/OnlineCourses"
import Heading from "../common/heading/Heading"
import "../allcourses/courses.css"
import { coursesCard } from "../../dummydata"
import { LinkContainer } from "react-router-bootstrap"
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"
const HAbout = () => {
  return (
    // <LinkContainer to="/register">
    //   <Nav.Link>
    //     </Nav.Link>
    // </LinkContainer>
        <OnlineCourses />
      
  )
}

export default HAbout
