// import library
import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import files
import Footer from "./Footer";
import NavBar from "./NavBar";
import Home from "./Home";
import Story from "./Story";
import Explane_text from "./Explane-text";
import Simulation_App from "./Simulation_App";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} /> 
            <Route path="/home" element={<Home />} />
            <Route path="/story" element={<Story />} />
            <Route path="/explane-Site" element={<Explane_text />} />
            <Route path="/simulation_App" element={<Simulation_App />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
