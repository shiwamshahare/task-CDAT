import React from "react";
import "./Main.css";
import Breadcrumb from "../../ui/BreadCrumb";
import Table from "./TableContent/Table";
const Main = () => {
  return (
    <main>
      <div>
        <Breadcrumb />
      </div>
      <div className="container">
        <Table />
      </div>
    </main>
  );
};

export default Main;
