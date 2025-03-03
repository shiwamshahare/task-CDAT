import React from "react";
import "./Breadcrumb.css";
import { IoHome } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";

const Breadcrumb = () => {
  return (
    <div className="breadcrumb-container">
      <div className="breadcrumb-content">
        <div className="breadcrumb-item">
          <a href="#" className="breadcrumb-link">
            <span className="breadcrumb-icon">
              <IoHome />
            </span>
            विभाग
          </a>
        </div>
        <div>
          <button className="add-button">
            <IoMdAdd />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
