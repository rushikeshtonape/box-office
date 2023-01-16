import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Starred from "./Pages/Starred";
import Show from "./Pages/Show";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>

      <Route path="/starred" element={<Starred />}></Route>
      <Route path="/show/:id" element={<Show />}></Route>
      <Route element={"This is 404 Page"}></Route>
    </Routes>
  );
}

export default App;
