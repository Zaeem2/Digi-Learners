import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import Header from "./components2/Header"
import Footer from "./components2/Footer"
import HomeScreen from "./screens/HomeScreen"
import ProductScreen from "./screens/ProductScreen"
import CartScreen from "./screens/CartScreen"
import LoginScreen from "./screens/LoginScreen"
import RegisterScreen from "./screens/RegisterScreen"
import ProfileScreen from "./screens/ProfileScreen"
import ShippingScreen from "./screens/ShippingScreen"
import PaymentScreen from "./screens/PaymentScreen"
import PlaceOrderScreen from "./screens/PlaceOrderScreen"
import OrderScreen from "./screens/OrderScreen"
import UserListScreen from "./screens/UserListScreen"
import UserEditScreen from "./screens/UserEditScreen"
import ProductListScreen from "./screens/ProductListScreen"
import ProductEditScreen from "./screens/ProductEditScreen"
import OrderListScreen from "./screens/OrderListScreen"
import BlogScreen from "./screens/BlogScreen"
import RentingScreen from "./screens/RentingScreen"
import ShippingEdit from "./screens/ShippingEdit"
import EditProfile from "./screens/EditProfile"
import EditPassword from "./screens/EditPassword"
import Videos from "./screens/Videos"
import BlogDetails from "./screens/BlogDetails"
import BlogListScreen from "./screens/BlogListScreen"
import BlogEditScreen from "./screens/BlogEditScreen"
import RentingListScreen from "./screens/RentingListScreen"
import RentingEditScreen from "./screens/RentingEditScreen"
import RentingDetails from "./screens/RentingDetails"
import Forum from "./screens/Forum"
import TeachersForm from "./screens/TeachersForm"
// import Header from "./Components/common/header/Header"

import About from "./Components/about/About"
import CourseHome from "./Components/allcourses/CourseHome"
import Team from "./Components/team/Team"
import Pricing from "./Components/pricing/Pricing"
import Blog from "./Components/blog/Blog"
import Contact from "./Components/contact/Contact"
// import Footer from "./Components/common/footer/Footer"
import Home from "./Components/home/Home"
import JitsiMeet from "./screens/JitsiMeet"
const App = () => {
  return (
    <Router>
      <Header />
      {/* <RentingScreen/> */}
      {/* <RentingDetails/> */}
      {/* <BlogListScreen/>
      <BlogEditScreen/> */}
      <main className="py-3">
        <Container>
          <Route path="/jitsi" component={JitsiMeet} />
          <Route path="/teachers" component={TeachersForm} />
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/admin/userlist" component={UserListScreen} />
          <Route path="/shippingedit" component={ShippingEdit} />
          <Route path="/profileedit" component={EditProfile} />
          <Route path="/editpassword" component={EditPassword} />
          <Route path="/videos" component={Videos} />
          <Route path="/blogs" component={BlogScreen} />
          <Route path="/blog/:id" component={BlogDetails} />
          <Route path="/admin/bloglist" component={BlogListScreen} />
          <Route
            path="/admin/bloglist/:pageNumber"
            component={BlogListScreen}
          />
          <Route path="/admin/blog/:id/edit" component={BlogEditScreen} />
          <Route path="/renting" component={RentingScreen} />
          <Route path="/admin/rentinglist" component={RentingListScreen} />
          <Route
            path="/admin/rentinglist/:pageNumber"
            component={RentingListScreen}
          />
          <Route path="/admin/renting/:id/edit" component={RentingEditScreen} />
          <Route path="/rentings/:id" component={RentingDetails} />
          <Route path="/forum" component={Forum} />

          <Route path="/admin/user/:id/edit" component={UserEditScreen} />
          <Route
            path="/admin/productlist"
            component={ProductListScreen}
            exact
          />
          <Route
            path="/admin/productlist/:pageNumber"
            component={ProductListScreen}
            exact
          />
          <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
          <Route path="/admin/orderlist" component={OrderListScreen} />
          <Route path="/search/:keyword" component={HomeScreen} exact />
          <Route path="/page/:pageNumber" component={HomeScreen} exact />
          <Route
            path="/search/:keyword/page/:pageNumber"
            component={HomeScreen}
            exact
          />

          <Route path="/search/:keyword" component={RentingDetails} exact />
          <Route path="/page/:pageNumber" component={RentingDetails} exact />
          <Route
            path="/search/:keyword/page/:pageNumber"
            component={RentingDetails}
            exact
          />

          <Route path="/homeScreen" component={HomeScreen} exact />

          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/courses" component={CourseHome} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/journal" component={Blog} />
          <Route exact path="/contact" component={Contact} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
