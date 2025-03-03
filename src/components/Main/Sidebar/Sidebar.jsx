import React from "react";
import "./Sidebar.css";
import { FaFileAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div>
        <div className="logo">logo</div>
      </div>
      <div className="sidebar_buttons">
        <button className="button-red">GPF Credit</button>
        <button>GPF Debit</button>
      </div>
      <div>
        <ul>
          {[
            "Client Admin",
            "जिल्हा परिषद विभाग प्रमुख ",
            "वित्त विभाग लिपिक ",
            "लेखा अधिकारी ",
            "उप-मुख्य लेखा व वित्त अधिकारी",
          ].map((item, idx) => (
            <li key={idx}>
              <div className="file">
                <span className="file-icon">
                  <FaFileAlt />
                </span>

                <span>{item}</span>
              </div>
              <span className="gt">&gt;</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
