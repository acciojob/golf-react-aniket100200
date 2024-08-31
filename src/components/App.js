import React, {useState} from 'react';
import StartButton from "./StartButton";
import Ball from "./Ball";




const App = ()=>{
    const[state,setState]=useState(true);
     return <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
         {state ? <StartButton setState={setState}/> : <Ball/>}
     </div>
}

export default App;