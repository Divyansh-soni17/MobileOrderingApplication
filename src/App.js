import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.js";
 import Mobile from "./components/mobile/Mobile.js";
 import MobileDetails from "./components/mobile/MobileDetails.js";
import Login from "./components/user/Login";
import Signup from "./components/user/Signup";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Mobile />} />
        <Route path="/:id" element={<MobileDetails/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </Router>
  );
}

export default App;
