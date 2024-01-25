// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail/detail";

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Trang chủ</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
