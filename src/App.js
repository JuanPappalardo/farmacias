import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Map from "./components/mapComponent";
import Home from "./components/homeComponent";
import Main from "./components/mainComponent";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App ">
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
