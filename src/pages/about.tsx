// Import CSS
import "../style/index.css";
// Import other pages
import About_Leo from "./about_leo";
import About_Nice from "./about_nice";
// Import other things that require
import React from "react";
import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import { Link, Route, Routes } from "react-router-dom";

const About: React.FC = () => {
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
            <span className="text-slate-300">About</span>
          </BreadcrumbItem>
        </Breadcrumb>

        {/* Content */}
        <div>
          <div className="mx-5 my-3 rounded-xl bg-slate-300 bg-opacity-50 py-5 text-center drop-shadow-lg">
            <p className="text-2xl text-black drop-shadow-md">About</p>
            <p className="text-xl text-black drop-shadow-md">Test</p>
            <div className="my-5 flex flex-wrap justify-center gap-10">
              <Link to="/about/leo">
                <div className="leo_avatar drop-shadow-xl"></div>
              </Link>
              <Link to="/about/nice">
                <div className="nice_avatar drop-shadow-xl"></div>
              </Link>
            </div>
          </div>
        </div>
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
