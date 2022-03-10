import React from "react";
import ReactDOM from "react-dom";
import Star from "./Star";


import "./styles.css";

function App() {
    return ( <
        div className = "App" >
        <
        h1 > Star Components: < /h1> <
        /div>
    );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
