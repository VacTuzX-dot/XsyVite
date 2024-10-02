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
} from "flowbite-react";

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
      <div className="min-h-screen">
        <Breadcrumb aria-label="Default breadcrumb">
          <BreadcrumbItem className="ml-2">
            <span className="text-slate-300">
              Home
            </span>
          </BreadcrumbItem>
        </Breadcrumb>
        <h2>Welcome to the Home Page</h2>
      </div>
    </>
  );
};

export default App;
