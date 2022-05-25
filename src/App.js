import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Authentication/Login/Login";
import MyProfile from "./Pages/MyProfile/MyProfile";
import Review from "./Pages/Review/Review";
import Navbar from "./Pages/Shared/Navbar";
import SignUp from "./Pages/Authentication/Login/SignUp";
import Purchase from "./Pages/Purchase/Purchase";
import RequireAuth from "./Pages/Authentication/Login/RequireAuth";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/MyOrders";
import AddReview from "./Pages/Dashboard/AddReview";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
import RequireAdmin from "./Pages/Dashboard/RequireAdmin";
import ManageOrders from "./Pages/Dashboard/AdminPage/ManageOrders";
import ManageProducts from "./Pages/Dashboard/AdminPage/ManageProducts";
import AddProducts from "./Pages/Dashboard/AdminPage/AddProducts";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        {/* <Route path="/about" element={<About/>}/> */}
        <Route path="/reviews" element={<Review />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/order/:manageId" element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        } />

        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>
        <Route index element={<MyProfile />} />
          <Route path="orders" element={<MyOrders />} />
          <Route path="review" element={<AddReview />} />
          <Route path="manageOrder" element={<ManageOrders />} />
          <Route path="manageProducts" element={<ManageProducts />} />
          <Route path="addProducts" element={<AddProducts />} />
          <Route path="admin" element={<RequireAdmin><MakeAdmin /></RequireAdmin>} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
