import React from "react";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={"hello"}></Route>
      <Route path="/Rushi" element={"THis is Rushis page"}></Route>
      <Route path="/starred" element={"This is starred Page"}></Route>
      <Route element={"This is 404 Page"}></Route>
    </Routes>
  );
}

export default App;
