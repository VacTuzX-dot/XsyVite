// Import CSS
import "../style/index.css";
// Import other page
import About from "./about";
import About_Leo from "./about_leo";
import About_Nice from "./about_nice";
// Import other things that require
import { Route, Routes } from "react-router-dom";
import {
  Navbar,
  NavbarLink,
  NavbarCollapse,
  NavbarToggle,
  NavbarBrand,
} from "flowbite-react";

function App() {
  return (
    <>
      {/* Add navigation links */}
      <Navbar fluid rounded className="bg-slate-700">
        <NavbarBrand>
          <span className="self-center whitespace-nowrap text-xl font-bold">
            Xsylab
          </span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink href="/" active>
            Home
          </NavbarLink>
          <NavbarLink href="/about" active>
            About
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>

      {/* Define routes for different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about_leo" element={<About_Leo />} />
        <Route path="/about_nice" element={<About_Nice />} />
      </Routes>
    </>
  );
}

// Home component for demonstration (can be placed in a separate file if needed)
const Home: React.FC = () => {
  return <h2>Welcome to the Home Page</h2>;
};

export default App;
