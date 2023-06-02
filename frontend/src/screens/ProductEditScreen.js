import axios from "axios"
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Form, Button, Card, Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Message from "../components2/Message"
import Loader from "../components2/Loader"
import FormContainer from "../components2/FormContainer"
import { listProductDetails, updateProduct } from "../actions/productActions"
import { PRODUCT_UPDATE_RESET } from "../constants/productConstants"

const ProductEditScreen = ({ match, history }) => {
  const productId = match.params.id

  const [name, setName] = useState("")
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState("")
  const [brand, setBrand] = useState("")
  const [category, setCategory] = useState("")
  const [countInStock, setCountInStock] = useState(0)
  const [description, setDescription] = useState("")
  const [care, setCare] = useState("")
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  const productUpdate = useSelector((state) => state.productUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET })
      history.push("/admin/productlist")
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(listProductDetails(productId))
      } else {
        setName(product.name)
        setPrice(product.price)
        setImage(product.image)
        setBrand(product.brand)
        setCategory(product.category)
        setCountInStock(product.countInStock)
        setDescription(product.description)
        setCare(product.care)
      }
    }
  }, [dispatch, history, productId, product, successUpdate])

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append("image", file)
    setUploading(true)

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }

      const { data } = await axios.post("/api/upload", formData, config)

      setImage(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
        image,
        brand,
        category,
        description,
        care,
        countInStock,
      })
    )
  }

  return (
    <>
      <Link
        to="/admin/productlist"
        className="btn btn-light my-3"
        style={{ backgroundColor: "#1eb2a6", color: "#FFFFFF" }}
      >
        Go Back
      </Link>
      <FormContainer>
        <h1 style={{ textAlign: "center" }}>Edit Product</h1>
        <Col md={10} style={{ marginLeft: "50px" }}>
          <Card>
            {loadingUpdate && <Loader />}
            {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant="danger">{error}</Message>
            ) : (
              <Form onSubmit={submitHandler}>
                <Form.Group controlId="name" style={{ margin: 10 }}>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) =>
                      setName(e.target.value.replace(/[^\w\s]/gi, ""))
                    }
                    required
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="price" style={{ margin: 10 }}>
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="image" style={{ margin: 10 }}>
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter image url"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  ></Form.Control>
                  <Form.File
                    id="image-file"
                    label="Choose File"
                    custom
                    onChange={uploadFileHandler}
                  ></Form.File>
                  {uploading && <Loader />}
                </Form.Group>

                <Form.Group controlId="brand" style={{ margin: 10 }}>
                  <Form.Label>Brand</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter brand"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="countInStock" style={{ margin: 10 }}>
                  <Form.Label>Count In Stock</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter countInStock"
                    range="999"
                    value={countInStock}
                    onChange={(e) => setCountInStock(e.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="category" style={{ margin: 10 }}>
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter category"
                    value={category}
                    onChange={(e) =>
                      setCategory(e.target.value.replace(/[^\w\s]/gi, ""))
                    }
                    required
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="description" style={{ margin: 10 }}>
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="care" style={{ margin: 10 }}>
                  <Form.Label>Care</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter care routine"
                    value={care}
                    onChange={(e) =>
                      setCare(e.target.value.replace(/[^\w\s]/gi, ""))
                    }
                    required
                  ></Form.Control>
                </Form.Group>

                <Button
                  type="submit"
                  variant="primary"
                  style={{ backgroundColor: "#1eb2a6", marginLeft: 150 }}
                >
                  Update
                </Button>
              </Form>
            )}
          </Card>
        </Col>
      </FormContainer>
    </>
  )
}

export default ProductEditScreen
