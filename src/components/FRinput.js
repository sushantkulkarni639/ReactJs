import React from 'react';
const FRinput =React.forwardRef((props,ref)=>{
    return(
        <div>
            <label>Name: </label>
            <input type="rext" ref={ref}></input>
        </div>
    )
})
export default FRinput;