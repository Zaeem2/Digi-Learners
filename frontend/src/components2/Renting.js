import React from "react"
import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"
import Rating from "./Rating"

const Renting = ({ renting }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/rentings/${renting._id}`}>
        <Card.Img src={renting.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/renting/${renting._id}`}>
          <Card.Title as="div">
            <strong>{renting.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <strong>Discription:{renting.description}</strong>
        </Card.Text>
        <br />

        <Card.Text as="h4">Rs.{renting.price}/PER_HOUR</Card.Text>
        {/* <Card.Text as='div'>
          /PER_HOUR
        </Card.Text> */}
        <Card.Text as="div">
          <Rating
            value={renting.rating}
            text={`${renting.numReviews} reviews`}
          />
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Renting
