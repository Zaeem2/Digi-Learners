import React from "react"
import { Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { LinkContainer } from "react-router-bootstrap"
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"
import SearchBox from "./SearchBox"
import { logout } from "../actions/userActions"
import digi from "../images/digi2.png"
const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
      <Navbar
        variant="dark"
        expand="lg"
        collapseOnSelect
        style={{ backgroundColor: "#1eb2a6" }}
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img className="img-fluid mx-2" src={digi} width={50} />
              <strong>DIGI</strong>
              &nbsp; <strong>LEARNER</strong>
              {/* <img src='https://i.pinimg.com/236x/f8/0f/66/f80f66ae640dca558e06d7266ef391c1.jpg' width={50}/> */}
            </Navbar.Brand>
          </LinkContainer>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Route render={({ history }) => <SearchBox history={history} />} />

            <Nav className="ml-auto">
            {/* <LinkContainer to="/blogs">
                <Nav.Link>Services</Nav.Link>
              </LinkContainer> */}
             <LinkContainer to="/homeScreen">
                <Nav.Link>HOME</Nav.Link>
              </LinkContainer>
       
              <LinkContainer to="/renting">
                <Nav.Link>
                  <i></i> Teachers
                </Nav.Link>
              </LinkContainer>
             
                <NavDropdown title="Services" id="services">
                  <LinkContainer to="/blogs">
                    <NavDropdown.Item>Our Services</NavDropdown.Item>
                  </LinkContainer>
              {/* <LinkContainer to="/videos">
                    <NavDropdown.Item>Videos</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/forum">
                    <NavDropdown.Item>App development</NavDropdown.Item>
                  </LinkContainer> */}
                  <LinkContainer to="/renting">
                    <NavDropdown.Item>Teachers</NavDropdown.Item>
                  </LinkContainer>
                  {/* <LinkContainer to="/vg">
                    <NavDropdown.Item>Game Development</NavDropdown.Item>
                  </LinkContainer>  */}
            </NavDropdown>
              {/* ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <div className="d-flex">
                    <i className="fas fa-user"></i> Sign In
                    </div>
                  </Nav.Link>
                </LinkContainer>
              )} */}

              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin Panel" id="adminmenu">
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/productlist">
                    <NavDropdown.Item>Courses</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/bloglist">
                    <NavDropdown.Item>Add Service</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/rentinglist">
                    <NavDropdown.Item>Add teacher</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/orderlist">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/cart">
                <Nav.Link >
                <div className="d-flex">
                  <i className="fas fa-shopping-cart mx-1"></i> Cart
                  </div>
                </Nav.Link>
              </LinkContainer>
                </NavDropdown>
                
              )}
             
             

              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <div className="d-flex">
                    <i className='fas fa-user mx-1'></i> Login
                    </div>
                  </Nav.Link>
                  
                </LinkContainer>
               
              )}
            </Nav>
            <LinkContainer to='/jitsi' target="_blank">
            <Nav.Link>
                    <div className="d-flex">
                    <i className='fas fa-user mx-1'></i> Meeting
                    </div>
                  </Nav.Link>
                </LinkContainer>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </header>
  )
              }

export default Header
