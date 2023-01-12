import React from "react";
import { Routes, Route } from "react-router-dom";
import Navs from "./components/Navs";
import Home from "./Pages/Home";
import Starred from "./Pages/Starred";

function App() {
  return (
    <div>
      <Navs />

      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/starred" element={<Starred />}></Route>
        <Route element={"This is 404 Page"}></Route>
      </Routes>
    </div>
  );
}

export default App;
