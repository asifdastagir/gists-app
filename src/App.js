import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchResults from "./components/SearchResults/SearchResults";
import SearchForm from "./components/SearchForm/SearchForm";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<SearchForm />} />
        <Route path="result" element={<SearchResults />} />
      </Routes>
    </Router>
  );
}

export default App;
