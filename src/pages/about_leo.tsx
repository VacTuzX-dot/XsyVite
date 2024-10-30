// Import CSS
import "../style/index.css";
// Import other pages
import About from "./about";
// Import other things that require
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "flowbite-react";

const About_Leo: React.FC = () => {
  return (
    <>
      <div className="min-h-screen">
        <Breadcrumb
          aria-label="Default breadcrumb"
          className="m-2 rounded-3xl bg-slate-600 px-3 py-2 drop-shadow-md"
        >
          <BreadcrumbItem className="ml-1">
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
            <span className="text-slate-300">Leo</span>
          </BreadcrumbItem>
        </Breadcrumb>

        {/* Content */}
        <h1>Leo</h1>
        
      </div>

      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default About_Leo;
