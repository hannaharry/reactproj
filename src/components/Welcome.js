import React, { useState } from 'react';


function Welcome(props) {
    const [color, changeColor] = useState("red");

    const switchColor = () => {
	changeColor(prevColor => {
	    if (prevColor === "red") {
		return "green";
	    } else {
		return "red";
	    }
	});
    };    

    return (
        <div>
            <h1 style={{ color: color }}>{props.message}</h1>
            <button onClick={switchColor}>
                Change color
            </button>
        </div>
    );
}

export default Welcome;

