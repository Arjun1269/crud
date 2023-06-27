import React from "react";
import Create from "./Components/Create.jsx";
import Clicking from "./Components/Clicking.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from "./Components/Update.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Create />}></Route>
          <Route exact path="/Clicking" element={<Clicking />}></Route>
          <Route exact path="/Update" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
