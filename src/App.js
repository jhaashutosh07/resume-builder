import React from "react";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <footer color="blue" font="bold">@ all right reserved to Ashutosh</footer>
    </div>
  );
}

export default App;