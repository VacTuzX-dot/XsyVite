// Import other pages
import Home from "./home";
import About from "./about";
import About_Leo from "./about_leo";
import About_Nice from "./about_nice";
// Import other things that require
import { Link, Route, Routes } from "react-router-dom";
import {
  Navbar,
  NavbarCollapse,
  NavbarToggle,
  NavbarBrand,
} from "flowbite-react";
// Flowbite docs https://flowbite-react.com/docs/getting-started/introduction

function AppNavbar(): JSX.Element {
  return (
    <>
      <Navbar fluid rounded className="bg-slate-400 bg-opacity-15">
        <NavbarBrand>
          <span className="text-gradient-main self-center whitespace-nowrap text-xl font-bold drop-shadow-md">
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/leo" element={<About_Leo />} />
        <Route path="/about/nice" element={<About_Nice />} />
      </Routes>
    </>
  );
}

export default AppNavbar;
