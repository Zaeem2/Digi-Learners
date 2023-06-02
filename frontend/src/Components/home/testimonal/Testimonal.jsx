import React from "react"
import { testimonal } from "../../../dummydata"
import Heading from "../../common/heading/Heading"
import "./style.css"
import { LinkContainer } from "react-router-bootstrap"
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"
const Testimonal = () => {
  return (
    <>
      <section className="testimonal padding">
        <div className="container">
          <Heading subtitle="TEACHERS" title="Our Successful Teachers" />

          <div className="content grid2">
            {testimonal.map((val) => (
              <div className="items shadow">
                <div className="box flex">
                  <div className="img">
                    <img src={val.cover} alt="" />
                    <i className="fa fa-quote-left icon"></i>
                  </div>
                  <div className="name">
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p>{val.desc}</p>
                <LinkContainer to="/teachers">
                  <Nav.Link>
                    <button className="btn btn-primary">Get Started</button>
                  </Nav.Link>
                </LinkContainer>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonal
