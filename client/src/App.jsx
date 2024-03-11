import Register from "./frontend/Pages/Register"
import Feedback from "./frontend/Pages/Feedback"
import Checkorder from "./frontend/Pages/Checkorder"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./frontend/Pages/Home"
import About from "./frontend/Pages/About"
import AddProduct from "./backend/backendPages/AddProduct"
import AddCategory from "./backend/backendPages/AddCategory"
import RegisterDetails from "./backend/backendPages/RegisterDetails"
import UpdateProduct from "./backend/backendPages/UpdateProduct"
import UpdateStatus from "./backend/backendPages/UpdateStatus"
import UserFeedBack from "./backend/backendPages/UserFeedBack"
import ProductCard from "./frontend/Pages/ProductCard"
import Login from "./frontend/Pages/Login"
import EditProduct from "./backend/backendPages/EditProduct"
import Freeapi from "./frontend/Freeapi"


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/todo" element={<Freeapi />} />
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/chekorder" element={<Checkorder />} />
          <Route path="/about" element={<About />} />
          <Route path="/productcart" element={<ProductCard />} />

          {/* All Admin Route */}

          <Route path="/addcategory" element={<AddCategory />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/registerdetails" element={<RegisterDetails />} />
          <Route path="/updateproduct" element={<UpdateProduct />} />
          <Route path="/updatestatus" element={<UpdateStatus />} />
          <Route path="/userfeedback" element={<UserFeedBack />} />
          <Route path='/editproduct/:id' element={<EditProduct />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
