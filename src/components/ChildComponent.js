import React from 'react';
const ChildComponent=(props)=>{
    return(
        <div>
            <button onClick={()=>props.clickHandler("sushant")}>Child Button</button>
        </div>
    )
}
export default ChildComponent;