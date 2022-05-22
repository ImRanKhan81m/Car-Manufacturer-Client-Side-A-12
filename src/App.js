import { Route, Routes } from "react-router-dom";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import MyProfile from "./Pages/MyProfile/MyProfile";
import Review from "./Pages/Review/Review";
import Navbar from "./Pages/Shared/Navbar";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blog" element={<Blog/>}/>
        {/* <Route path="/about" element={<About/>}/> */}
        <Route path="/reviews" element={<Review/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/profile" element={<MyProfile/>}/>
      </Routes>
    </div>
  );
}

export default App;
