import React from 'react';
const StartButton = ({setState}) => {
    return <button className={"start"} onClick={()=>{setState(false)}}>Start</button>
}

export default StartButton;