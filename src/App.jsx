import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/SinglePage/HomePage";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className={`app ${isDarkMode ? "dark" : ""}`}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
