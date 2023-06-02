import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Row, Col } from "react-bootstrap"
import Renting from "../components2/Renting"
import Message from "../components2/Message"
import Loader from "../components2/Loader"
import Paginate from "../components2/Paginate"
// import ProductCarousel from '../components/ProductCarousel'
import RentingCarousel from "../components2/RentingCarousel"
import Meta from "../components2/Meta"
import { listRentings } from "../actions/rentingActions"

const RentingScreen = ({ match }) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const rentingList = useSelector((state) => state.rentingList)
  const { loading, error, rentings, page, pages } = rentingList

  useEffect(() => {
    dispatch(listRentings(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
      <Meta />
      {!keyword ? (
        <RentingCarousel />
      ) : (
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>
      )}
      <h1>Our Teachers</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {rentings.map((renting) => (
              <Col key={renting._id} sm={12} md={6} lg={4} xl={3}>
                <Renting renting={renting} />
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

export default RentingScreen
