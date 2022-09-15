import React from "react";
import "./App.css";
import data from "./report.json";
import { HomePageHeader } from "./components/HomePageHeader";
import { Report } from "./components/Report";

function App() {
  return (
    <div className="App">
      <HomePageHeader />
      <Report data={data} />
    </div>
  );
}

export default App;
