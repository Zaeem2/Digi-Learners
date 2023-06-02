import React from "react"
import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"
import Rating from "./Rating"

const Blog = ({ blog }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/blog/${blog._id}`}>
        <Card.Img src={blog.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/blog/${blog._id}`}>
          <Card.Title as="div">
            <strong>{blog.name}</strong>
          </Card.Title>
          <Card.Title as="div">
            <strong>{blog.cnic}</strong>
          </Card.Title>
          <Card.Title as="div">
            <strong>{blog.city}</strong>
          </Card.Title>
          <Card.Title as="div">
            <strong>{blog.experience}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating value={blog.rating} text={`${blog.numReviews} reviews`} />
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Blog
