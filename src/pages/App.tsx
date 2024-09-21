import { Link, Route, Routes } from "react-router-dom"; // Import Routes and Route
import "../style/index.css";
import About from "./about"; // Import About page component

function App() {
  return (
    <>
      {/* Add navigation links */}
      <nav className="rounded-2xl bg-slate-800 py-4 text-xl">
        <Link to="/">
          <button>Home</button>
        </Link>{" "}
        |{" "}
        <Link to="/about">
          <button>About</button>
        </Link>
      </nav>

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
