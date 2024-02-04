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


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/chekorder" element={<Checkorder />} />
          <Route path="/about" element={<About />} />


          {/* All Admin Route */}

          <Route path="/addcategory" element={<AddCategory />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/registerdetails" element={<RegisterDetails />} />
          <Route path="/updateproduct" element={<UpdateProduct />} />
          <Route path="/updatestatus" element={<UpdateStatus />} />
          <Route path="/userfeedback" element={<UserFeedBack />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
