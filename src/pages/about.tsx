// Import CSS
import "../style/index.css";
// Import other page
import About_Leo from "./about_leo";
import About_Nice from "./about_nice";
// Import other things that require
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Button } from "flowbite-react";

const About: React.FC = () => {
  return (
    <>
      <div>
        <h1>About Us</h1>
        <Button href="/about_leo">Leo</Button>
        <Button href="/about_nice">Nice</Button>
      </div>
      {/* Define routes for different pages */}
      <Routes>
        <Route path="/about_leo" element={<About_Leo />} />
        <Route path="/about_nice" element={<About_Nice />} />
      </Routes>
    </>
  );
};

export default About;
