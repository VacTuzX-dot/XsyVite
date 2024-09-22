import { Link, Route, Routes } from "react-router-dom";
import "../style/index.css";
import About from "./about";
import { Button, Navbar, NavbarLink, NavbarCollapse } from "flowbite-react";

function App() {
  return (
    <>
      {/* Add navigation links */}
      <Navbar fluid rounded>
        {/* <Link to="/">
          <Button>Home</Button>
        </Link>{" "}
        |{" "}
        <Link to="/about">
          <Button>About</Button>
        </Link> */}
        <NavbarCollapse>
        <NavbarLink href="/" active>
          Home
        </NavbarLink>
        <NavbarLink href="/about">
          About
        </NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
      </Navbar>

      {/* Define routes for different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

// Home component for demonstration (can be placed in a separate file if needed)
const Home: React.FC = () => {
  return <h2>Welcome to the Home Page</h2>;
};

export default App;
