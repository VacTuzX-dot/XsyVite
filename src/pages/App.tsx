// App.tsx

import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom"; // Import Routes and Route
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../style/App.css";
import About from "./about"; // Import About page component

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold">Hello world!</h1>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      {/* Add navigation links */}
      <nav>
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

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

// Home component for demonstration (can be placed in a separate file if needed)
const Home: React.FC = () => {
  return <h2>Welcome to the Home Page</h2>;
};

export default App;
