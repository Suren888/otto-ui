import React from "react";
import './App.css';
   

import SideBarLeft from "./components/SideBarLeft";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div className="App">
      <TopBar/>
     <SideBarLeft/>
    </div>
  );
}

export default App;
