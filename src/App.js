import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import './App.css';

//Components

import Home from "./pages/Home/Home"
import ChartPage from "./pages/ChartPage/ChartPage"
import Error from "./components/Error/Error"


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/data/:id" element={<ChartPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
