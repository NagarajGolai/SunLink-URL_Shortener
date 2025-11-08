import Home from "./components/Home";
import About from "./components/About";
import "./components/css/App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="flex absolute justify-between items-center w-full p-5">
          <div className="flex gap-5">
            <Link to="/">
              Home
            </Link>
            <Link to="/about">
              About
            </Link>
          </div>

          <span>Nagaraj</span>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
