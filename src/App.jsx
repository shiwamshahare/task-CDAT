import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Sidebar from "./components/Main/Sidebar/Sidebar";

const App = () => {
  return (
    <div className="App">
      <div>
        <Sidebar />
      </div>
      <div>
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default App;
