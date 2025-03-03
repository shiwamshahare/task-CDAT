import React from "react";
import "./Dropdown.css";

const Dropdown = ({ options, selectedOption, setSelectedOption }) => {
  const handleClear = () => {
    setSelectedOption("");
  };

  return (
    <div className="dropdownContainer">
      <select
        name="department"
        id="department"
        className="selectDropdown"
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="">Select an option</option>
        {options.length > 0 &&
          options.map((option) => (
            <option key={option.m_DepartmentID} value={option.m_DepartmentID}>
              {option.departmentName}
            </option>
          ))}
      </select>
      <button className="clearButton" onClick={handleClear}>
        Clear
      </button>
    </div>
  );
};

export default Dropdown;
