import React, { useState } from "react";
import Game from "./components/ticky/game";
import Header from "./components/ticky/header";
import Dashboard from "./components/users/dashboard";
import { Provider } from "react-redux";
import store from "./store";
//TODO: configure webpack to integrate css files
// import './App.css';

function App() {
  return (
    <>
      <Provider store={store}>
        <Header></Header>
        <br />
        <div className="container">
          <Game />
          <Dashboard />
        </div>
      </Provider>
    </>
  );
}

export default App;
