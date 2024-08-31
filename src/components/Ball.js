import React, {useState} from 'react';

const Ball = ()=>
{
    const[myLeft,setLeft]= useState(0);
    return <div tabIndex="0" onKeyDown={(e)=>{
        if(e.key==="ArrowRight"){
            setLeft(`${parseInt(myLeft)+5}px`)
        }
    }}>
        <div className={"ball"} style={{height:"200px",width:"200px",borderRadius:"50%", backgroundColor:"black",position:"fixed",left:myLeft,top:0}}></div>
    </div>
}


export default Ball;