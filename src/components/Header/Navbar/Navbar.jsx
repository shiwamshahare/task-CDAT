import React from "react";
import "./Navbar.css";
import { FaGlobe, FaUser } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="nav">
      <h1>Zilla Parishad, Kolhapur</h1>

      <div className="yearMonth">
        <select className="nav_dropdown">
          <option>2024-2025</option>
          <option>2023-2024</option>
          <option>2022-2023</option>
          <option>2021-2022</option>
        </select>
        <select className="nav_dropdown">
          <option>जनवरी</option>
          <option>फेब्रुवारी</option>
          <option>मार्च</option>
          <option>एप्रिल</option>
          <option>मे</option>
          <option>जून</option>
          <option>जुलै</option>
          <option>ऑगस्ट</option>
          <option>सप्टेंबर</option>
          <option>ऑक्टोबर</option>
          <option>नोव्हेंबर</option>
          <option>डिसेंबर</option>
        </select>
      </div>
      <div
        className="
        languageUser"
      >
        <div className="language">
          <FaGlobe />
          <span>English</span>
        </div>
        <div className="user">
          <FaUser />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
