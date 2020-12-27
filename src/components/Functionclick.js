import React from 'react';
const Functionclick=()=>{
    const funChange=()=>{
        console.log("got clicked");
    }
    return(<div>
        <button onClick={funChange}>Function Click </button>
    </div>
    )
}
export default Functionclick;