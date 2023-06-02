import React from "react"
import { price } from "../../dummydata"
import { LinkContainer } from "react-router-bootstrap"
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"
const PriceCard = () => {
  return (
    <>
      {price.map((val) => (
        <div className="items shadow">
          <h4>{val.name}</h4>
          <h1>
            <span>$</span>
            {val.price}
          </h1>
          <p>{val.desc}</p>
          <LinkContainer to="/blogs">
            <Nav.Link>
              <button className="primary-btn">GET STARTED</button>
            </Nav.Link>
          </LinkContainer>
        </div>
      ))}
    </>
  )
}

export default PriceCard
