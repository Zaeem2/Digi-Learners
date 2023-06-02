import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Row, Col, ListGroup, Image, Form, Button, Card } from "react-bootstrap"
import Message from "../components2/Message"
import {
  addProductToCart,
  addRentToCart,
  removeFromCart,
} from "../actions/cartActions"
import { useLocation } from "react-router-dom/cjs/react-router-dom"

const CartScreen = ({ match, location, history }) => {
  // const productId = match.params.id

  // const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const productId = match.params.id
  const { search } = useLocation()
  const query = new URLSearchParams(search)
  const qty = query.get("qty")
  const type = query.get("type")

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    //   if (productId) {
    //     dispatch(addToCart(productId, qty))
    //   }
    // }, [dispatch, productId, qty])

    // const removeFromCartHandler = (id) => {
    //   dispatch(removeFromCart(id))
    // }

    if (productId) {
      if (type === "product") dispatch(addProductToCart(productId, qty))
      else if (type === "renting") dispatch(addRentToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    history.push("/login?redirect=shipping")
  }

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty <Link to="/">Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>Rs.{item.price}</Col>
                  {/* <Col md={2}>
                    <Form.Control
                      as="select"
                      value={item.qty}
                      onChange={(e) =>
                        // dispatch(
                        //   addProductToCart(item.product, Number(e.target.value))

                        // )
                        dispatch(
                          type === "product"
                            ? addProductToCart(
                                item.product,
                                Number(e.target.value)
                              )
                            : addRentToCart(
                                item.product,
                                Number(e.target.value)
                              )
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => {
                        // if(x>=9)
                        return (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        )
                      })}
                    </Form.Control>
                  </Col> */}
                  <Col md={2}>
                    <Button
                      type="button"
                      variant="danger"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                items
              </h2>
              PKR
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                style={{ backgroundColor: "#1D4B2C" }}
                type="button"
                className="btn-block"
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed To Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  )
}

export default CartScreen
