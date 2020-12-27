import React from 'react';
import './mtStyle.css'
const StyleSheet=(Props)=>{
    let className=Props.primary?'primary': "secondary"
    return(
        <div className={`${className} font`}>StyleSheet</div>
    )
}
export default StyleSheet;
