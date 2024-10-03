// Import CSS
import "../style/index.css";
// Import other pages
import About from "./about";
import About_Leo from "./about_leo";
import About_Nice from "./about_nice";
// Import other things that require
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import {
  Navbar,
  NavbarCollapse,
  NavbarToggle,
  NavbarBrand,
  Breadcrumb,
  BreadcrumbItem,
  Card,
} from "flowbite-react";
import { Toast } from "flowbite-react";
import { HiFire } from "react-icons/hi";

function App() {
  return (
    <>
      {/* Add navigation links */}
      <Navbar fluid rounded className="bg-slate-400 bg-opacity-15">
        <NavbarBrand>
          <span className="self-center whitespace-nowrap text-xl font-bold drop-shadow-md">
            Xsylab
          </span>
        </NavbarBrand>
        <NavbarToggle className="text-blue-400" />
        <NavbarCollapse>
          <Link
            to="/"
            className="text-base text-blue-400 drop-shadow-md transition-colors hover:text-blue-200 hover:transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-base text-blue-400 drop-shadow-lg transition-colors hover:text-blue-200 hover:transition-colors"
          >
            About
          </Link>
        </NavbarCollapse>
      </Navbar>

      {/* Define routes for different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/leo" element={<About_Leo />} />
        <Route path="/about/nice" element={<About_Nice />} />
      </Routes>
    </>
  );
}

// Home component for demonstration (can be placed in a separate file if needed)
const Home: React.FC = () => {
  return (
    <>
      {" "}
      <div className="min-h-screen">
        <Breadcrumb
          aria-label="Default breadcrumb"
          className="m-2 rounded-3xl bg-slate-600 px-3 py-2"
        >
          <BreadcrumbItem className="ml-1">
            <span className="text-slate-300">Home</span>
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="w-100 h-100 mt-10 flex flex-col items-center justify-center">
          {/* Hero Section */}
          <div className="flex flex-col items-center">
            <h1 className="text-5xl font-bold text-slate-400 drop-shadow-md">
              Welcome to Xsylab Team!
            </h1>
            <p className="mt-5 max-w-lg text-center text-xl text-slate-200">
              We are a freelance team specializing in web development, design,
              and creative solutions. Our team consists of passionate
              professionals dedicated to delivering high-quality projects.
            </p>
            <Link
              to="/about"
              className="mb-10 mt-6 inline-block rounded-full bg-blue-500 px-4 py-2 text-white hover:bg-blue-400"
            >
              Learn More About Us
            </Link>
          </div>{" "}
          <div className="flex flex-row items-center justify-center gap-5">
            <Card className="max-w-sm drop-shadow-lg">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
            <Toast className="bg-gray-500 bg-opacity-20">
              <div className="ml-2 text-base font-normal text-slate-100">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deserunt, eum. Debitis repellendus nobis iusto doloribus nulla
                minima. Deleniti, excepturi. Iste corrupti voluptates esse ullam
                rem, sunt in. Maiores, odio voluptatibus.
              </div>
            </Toast>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
