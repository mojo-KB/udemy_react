import React from "react";

function Star ({
    value,
    color,
    handleHover,
    handleHoverLeave,
    handleClick,
    isFilled
}) {
    if (!handleHover) {
        return (
            <span 
                className="Star"
                style = {{ color}}
                onMouseEnter= {() => console.log("Hovered In")}
                onMouseLeave = {() => console.log("Hovered Out")}
                onClick = {() => alert("Clicked a star!")}
            >
            {isFilled ? "★" : "☆"}
            </span>

            );
    }

    return (
        <span
        className = "Star"
        style = {{color}}
        onMouseEnter = {() => handleHover(value)}
        onMouseLeave = {() => handleHoverLeave(value)}
        onClick = {() => handleClick(value)}
        >
         {isFilled ? "★" : "☆"}
         </span>
    );
}


export default Star;