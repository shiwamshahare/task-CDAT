import React, { useEffect, useState } from "react";
import "./Table.css";
import Dropdown from "./Dropdown";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const DROPDOWN_API =
  "https://apigpf.cdat.work/CommonDLLData/Get_DDL_M_Department_Select?M_DepartmentID=0&DepartmentType_M_Indicator_ID=0&M_PanchayatSamitiID=0&M_UserID=1&Language=Marathi&Flag=master";
const TABLE_API =
  "https://apigpf.cdat.work/Master/Get_M_Department_Select?M_DepartmentID=0&M_PanchayatSamitiID=0&DepartmentName=&DepartmentName_Marathi=&Language=Marathi&M_UserID=1&FromTop=1&ToTop=10";

const Table = () => {
  const [dropdownData, setDropdownData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    axios
      .get(DROPDOWN_API)
      .then((response) => {
        setDropdownData(response.data.data.table);
      })
      .catch((error) => {
        console.error("Error fetching dropdown data: ", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(TABLE_API)
      .then((response) => {
        setTableData(response.data.data.table);
      })
      .catch((error) => {
        console.error("Error fetching table data: ", error);
      });
  }, []);

  const filteredTableData = selectedOption
    ? tableData.filter(
        (item) => item.m_DepartmentID.toString() === selectedOption
      )
    : tableData;

  return (
    <div>
      <span>विभाग </span>
      <Dropdown
        options={dropdownData}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <table>
        <thead>
          <tr>
            {["अ.कृ.", "विभाग", "कृती"].map((item, idx) => (
              <th key={idx}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredTableData.map((item) => (
            <tr key={item.rowNum}>
              <td>{item.rowNum}</td>
              <td>{item.departmentName_Marathi}</td>
              <td className="action">
                <span>
                  <FaEdit />
                </span>
                <span className="deleteButton">
                  <MdDelete />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
