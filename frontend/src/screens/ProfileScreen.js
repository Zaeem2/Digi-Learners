import React, { useState, useEffect } from "react"
import { Table, Form, Button, Row, Col } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Message from "../components2/Message"
import Loader from "../components2/Loader"
import { getUserDetails, updateUserProfile } from "../actions/userActions"
import { listMyOrders } from "../actions/orderActions"
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants"
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"

const ProfileScreen = ({ location, history }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [city, setCity] = useState("")
  const [address, setAddress] = useState("")
  const [postalCode, setPostalCode] = useState(null)
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile

  const orderListMy = useSelector((state) => state.orderListMy)
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy

  useEffect(() => {
    if (!userInfo) {
      history.push("/login")
    } else {
      if (!user || !user.name || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET })
        dispatch(getUserDetails("profile"))
        dispatch(listMyOrders())
      } else {
        setName(user.name)
        setEmail(user.email)
        setAddress(user.address)
        setPhone(user.phone)
        setCity(user.city)
        setPostalCode(user.postalCode)
      }
    }
  }, [dispatch, history, userInfo, user, success])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage("Passwords do not match")
    } else {
      dispatch(
        updateUserProfile({
          id: user._id,
          name,
          email,
          password,
          city,
          address,
          postalCode,
          phone,
        })
      )
    }
  }

  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>
        <LinkContainer to="/profileedit">
          <Nav.Link>
            <i className="fas fa-edit"></i> Edit
          </Nav.Link>
        </LinkContainer>
        {message && <Message variant="danger">{message}</Message>}
        {}
        {success && <Message variant="success">Profile Updated</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                // onChange={(e) => setName(e.target.value)}
                disabled
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                // onChange={(e) => setEmail(e.target.value)}
                disabled
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="address"
                placeholder="Enter address"
                value={address}
                // onChange={(e) => setPassword(e.target.value)}
                disabled
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="city"
                placeholder="City"
                value={city}
                // onChange={(e) => setConfirmPassword(e.target.value)}
                disabled
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="postalCode">
              <Form.Label>Postal Code</Form.Label>
              <Form.Control
                type="postalCode"
                placeholder="PostalCode"
                value={postalCode}
                // onChange={(e) => setConfirmPassword(e.target.value)}
                disabled
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="phone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="phone"
                placeholder="Phone"
                value={phone}
                // onChange={(e) => setConfirmPassword(e.target.value)}
                disabled
              ></Form.Control>
            </Form.Group>

            {/* <Button type='submit' variant='primary'>
              Update
            </Button> */}
          </Form>
        )}
      </Col>
      <Col md={9}>
        <h2>My Courses</h2>
        {loadingOrders ? (
          <Loader />
        ) : errorOrders ? (
          <Message variant="danger">{errorOrders}</Message>
        ) : (
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                {/* <th>ID</th> */}
                <th>Buy Date</th>
                <th>TOTAL</th>
                <th>Details</th>
                <th>Actions</th>
                {/* <th>PAID</th>
                <th>DELIVERED</th> */}
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  {/* <td>{order._id}</td> */}
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>{order.totalPrice}</td>
                  {/* <td>
                    {order.isPaid ? (
                      order.paidAt.substring(0, 10)
                    ) : (
                      <i className="fas fa-times" style={{ color: "red" }}></i>
                    )}
                  </td> */}
                  {/* <td>
                    {order.isDelivered ? (
                      order.deliveredAt.substring(0, 10)
                    ) : (
                      <i className="fas fa-times" style={{ color: "red" }}></i>
                    )}
                  </td> */}
                  <td>
                    <LinkContainer to={`/order/${order._id}`}>
                      <Button className="btn-sm" variant="light">
                        Details
                      </Button>
                    </LinkContainer>
                  </td>
                  <td><LinkContainer to={`/videos`}>
                      <Button className="btn-sm" variant="light">
                       Watch Course
                      </Button>
                    </LinkContainer></td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Col>
    </Row>
  )
}

export default ProfileScreen
