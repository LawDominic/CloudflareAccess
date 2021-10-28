import React from 'react';
import Login from "./Login"
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App" class="has-background-light">
        <Login />
      </div>
    </Router>
  );
}

export default App;
