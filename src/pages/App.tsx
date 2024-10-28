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
  Toast,
} from "flowbite-react";

function App() {
  return (
    <>
      {/* Add navigation links */}
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
        <Breadcrumb
          aria-label="Default breadcrumb"
          className="m-2 rounded-3xl bg-slate-600 px-3 py-2 drop-shadow-md"
        >
          <BreadcrumbItem className="ml-1">
            <span className="text-slate-300">Home</span>
          </BreadcrumbItem>
        </Breadcrumb>

        {/* Content */}
        <div className="w-100 h-100 mb-20 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="my-20">Logo will be here</div>
            <h1 className="text-5xl font-bold text-slate-400 drop-shadow-md text-center">
              Welcome to Xsylab Team!
            </h1>
            {/* <p className="mt-5 max-w-lg text-center text-xl text-slate-200">
              We are a freelance team specializing in web development, design,
              and creative solutions. Our team consists of passionate
              professionals dedicated to delivering high-quality projects.
            </p> */}
            <p className="my-44 max-w-lg text-center text-xl font-bold text-yellow-400 drop-shadow-lg">
              This webiste is currently working on.
              <a
                href="https://github.com/VacTuzX-dot/XsyVite"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 underline transition-colors hover:text-sky-300 hover:transition-colors"
              >
                <p className="mt-2 cursor-pointer">
                  Click here to open source code of this website
                </p>
              </a>
            </p>
            <Link
              to="/about"
              className="mb-10 mt-6 inline-block rounded-full bg-blue-500 px-4 py-2 text-white drop-shadow-lg transition-colors hover:bg-blue-400 hover:transition-colors"
            >
              Learn More About Us
            </Link>
          </div>

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
