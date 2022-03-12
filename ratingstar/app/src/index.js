import React from "react";
import ReactDOM from "react-dom";
import Star from "./Star";
import Rating from "./Rating";

import "./styles.css";

function App() {
    return ( <div className = "App" >
        <h1> Star Components: </h1> 
        <Star color="pink" isFilled />
        <Star color="magenta" isFilled />
        <Star color="indigo" />
         <h2>Rating Component (uses Stars):</h2>
      <Rating stars={4} />
      <Rating stars={5} />
      <Rating stars={3} />

        </div>
    );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);