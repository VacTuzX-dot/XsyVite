import { Link, Route, Routes } from "react-router-dom";
import "../style/index.css";
import About from "./about";
import { Button, Navbar } from "flowbite-react";

function App() {
  return (
    <>
      {/* Add navigation links */}
      <Navbar className="rounded-2xl bg-slate-800 py-4 text-xl">
        <Link to="/">
          <Button>Home</Button>
        </Link>{" "}
        |{" "}
        <Link to="/about">
          <Button>About</Button>
        </Link>
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
