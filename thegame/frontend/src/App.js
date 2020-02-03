import React, { useState } from "react";
import Game from "./components/ticky/game";
import Header from "./components/ticky/header";
import Dashboard from "./components/users/dashboard";
// import './App.css';

function App() {
  return (
    <>
      <Header></Header>
      <br />
      <div className="container">
        <Gam />
        <Dashboard />
      </div>
    </>
  );
}

export default App;
