import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./Routes";
import React, { Suspense } from "react";
import './App.css';

function App() {
  return (
      <Router>
        <Suspense fallback={null}>
          <Routes />
        </Suspense>
      </Router>
  );
}

export default App;
