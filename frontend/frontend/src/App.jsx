import React from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Courses from "./components/courses/Courses";
import Signup from "./components/Signup";

const App = () => {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Course" element={<Courses />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
