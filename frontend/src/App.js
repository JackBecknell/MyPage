// syling imports
import "./App.css";

// General Imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// page imports
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
