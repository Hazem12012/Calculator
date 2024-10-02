import { React } from "react";
// import images
import logo from "./images/logo-search-grid-1x__2_-removebg-preview.png";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="header">
      <div className="container">
        <a href="/home" className="logo">
          <img src={logo} alt="Not Found" style={{ width: "170px" }} />
        </a>
        <nav className="main-nav">
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/story">Story</NavLink>
          </li>
          <li>
            <NavLink to="/simulation_App">Simulation App </NavLink>
          </li>
          <li className="/main-link button">
            <NavLink to="/explane-Site">Explore Site</NavLink>
          </li>
        </nav>
      </div>
    </div>
  );
}
