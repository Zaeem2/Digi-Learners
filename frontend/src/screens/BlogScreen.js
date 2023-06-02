import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Row, Col } from "react-bootstrap"
import Blog from "../components2/Blog.js"
import Message from "../components2/Message"
import Loader from "../components2/Loader"
import Paginate from "../components2/Paginate"
// import ProductCarousel from '../components/ProductCarousel'
import BlogCarousel from "../components2/BlogCarousel"
import Meta from "../components2/Meta"
import { listBlogs } from "../actions/blogActions"

const BlogScreen = ({ match }) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const blogList = useSelector((state) => state.blogList)
  const { loading, error, blogs, page, pages } = blogList

  useEffect(() => {
    dispatch(listBlogs())
  }, [dispatch])

  return (
    <>
      <Meta />
      {!keyword ? (
        <BlogCarousel />
      ) : (
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>
      )}
      <h1>Our Services</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {blogs.map((blog) => (
              <Col key={blog._id} sm={12} md={6} lg={4} xl={3}>
                <Blog blog={blog} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  )
}

export default BlogScreen
