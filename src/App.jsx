import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Contact from "./Pages/Contact Us/Contact";
import Login from "./Pages/Login/Login"
import AboutUs from "./Pages/About Us/AboutUs";
import SignUp from "./Pages/SignUp/SignUp"
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />

    </Routes>
  )
}

export default App; 