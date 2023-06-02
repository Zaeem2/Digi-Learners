import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { Carousel, Image } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Loader from "./Loader"
import Message from "./Message"
import { listTopRentings } from "../actions/rentingActions"

const RentingCarousel = () => {
  const dispatch = useDispatch()

  const rentingTopRated = useSelector((state) => state.rentingTopRated)
  const { loading, error, rentings } = rentingTopRated

  useEffect(() => {
    dispatch(listTopRentings())
  }, [dispatch])

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Carousel pause="hover" style={{ backgroundColor: "#1eb2a6" }}>
      {rentings.map((renting) => (
        <Carousel.Item key={renting._id}>
          <Link to={`/renting/${renting._id}`}>
            <Image src={renting.image} alt={renting.name} fluid />
            <Carousel.Caption className="carousel-caption">
              <h2>
                {renting.name} ({renting.price})PKR
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default RentingCarousel
