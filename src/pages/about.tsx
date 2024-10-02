// Import CSS
import "../style/index.css";
// Import other pages
import About_Leo from "./about_leo";
import About_Nice from "./about_nice";
// Import other things that require
import React from "react";
import { Button, Breadcrumb, BreadcrumbItem } from "flowbite-react";
import { Link, Route, Routes } from "react-router-dom";

const About: React.FC = () => {
  return (
    <>
      <div className="min-h-screen">
        <Breadcrumb
          aria-label="Default breadcrumb"
          className="m-2 rounded-3xl bg-slate-600 px-3 py-2"
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
            <span className="text-slate-300">About</span>
          </BreadcrumbItem>
        </Breadcrumb>
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
