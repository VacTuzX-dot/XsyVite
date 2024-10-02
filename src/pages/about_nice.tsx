// Import CSS
import "../style/index.css";
// Import other pages
import About from "./about";
// Import other things that require
import React from "react";
import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import { Link, Route, Routes } from "react-router-dom";

const About_Nice: React.FC = () => {
  return (
    <>
      <div className="min-h-screen">
        <Breadcrumb aria-label="Default breadcrumb">
          <BreadcrumbItem className="ml-2">
            <Link
              to="/"
              className="text-slate-400 transition-colors hover:text-white hover:transition-colors"
            >
              Home
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link
              to="/about"
              className="text-slate-400 transition-colors hover:text-white hover:transition-colors"
            >
              About
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <span className="text-slate-300">Nice</span>
          </BreadcrumbItem>
        </Breadcrumb>
        <h1>Nice</h1>
      </div>

      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default About_Nice;
