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
            <span className="text-slate-300">Nice</span>
          </BreadcrumbItem>
        </Breadcrumb>

        {/* Content */}
        <div className="mx-6 mt-5 rounded-xl bg-slate-400 bg-opacity-40 pb-7 pt-8 text-center drop-shadow-xl">
          <h1 className="text-2xl drop-shadow-md">About Me!</h1>
        </div>
      </div>

      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default About_Nice;
