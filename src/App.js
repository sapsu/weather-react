import React from "react";
import Weather from "./Weather";
import "./App.css";
import { BallTriangle } from "react-loader-spinner";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello world</h1>
        <BallTriangle
          height={70}
          width={70}
          radius={3}
          color="#8865F1"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
        <Weather city="New York" />
        <a href="https://www.shecodes.io/" target="_blank" rel="noreferrer">
          SheCodes
        </a>
      </header>
    </div>
  );
}

export default App;
