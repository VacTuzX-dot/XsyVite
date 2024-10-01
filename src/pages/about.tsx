// Import CSS
import "../style/index.css";
// Import other page
import About_Leo from "./about_leo";
import About_Nice from "./about_nice";
// Import other things that require
import React from "react";
import { Button } from "flowbite-react";
import { Link, Route, Routes } from "react-router-dom";

const About: React.FC = () => {
  return (
    <>
      <div className="min-h-screen">
        <h1>About Us</h1>
        <Link to="/about/leo">
          <Button>Leo</Button>
        </Link>

        <Link to="/about/nice">
          <Button>Nice</Button>
        </Link>
      </div>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/about/leo" element={<About_Leo />} />
        <Route path="/about/nice" element={<About_Nice />} />
      </Routes>
    </>
  );
};

export default About;
