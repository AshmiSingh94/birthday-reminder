import React, { useState } from "react";
import "./App.css";
import List from "./List.js";
import { data } from "./data.js";
function App() {
  const [people, setPeople] = useState(data);
  return (
    <div className="App">
      <div className="container">
        <div className="app-header">{people.length} birthdays today</div>
        <div className="">
          <List people={people} />
        </div>
        <div className="btn-field">
          <button className="custom-btn"
            onClick={() => {
              setPeople([]);
            }}
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
