import React from 'react';
const ChildComponent=(props)=>{
    return(
        <div>
            <button onClick={()=>props.clickHandler("sushant kulkarni")}>Child Button</button>
        </div>
    )
}
export default ChildComponent;