import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css" 
import { LinkContainer } from "react-router-bootstrap"
import { Nav } from "react-bootstrap"


const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              subtitle="WELCOME TO DIGI-LEARNER"
              title="Best Online Education Expertise"
            />
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="button">
              <button className="primary-btn" >
                GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button className="primary-btn">
                VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
      <a href="/teachers">
        <button className="btn btn-dark " style={{ position: "absolute", top:"170px",left:"2%", padding: "1%", borderRadius: "100%" }} >  Teacher <br /> Registration</button>
      </a>
    </>
  )
}

export default Hero
