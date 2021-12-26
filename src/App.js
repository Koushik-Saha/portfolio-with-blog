import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./Routes";
import React, { Suspense } from "react";

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
