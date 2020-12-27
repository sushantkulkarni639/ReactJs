import React from 'react';

const Greet=(props)=>{
    // console.log(props);
    const{name,aka,children}=props;
    return(
        <div><h1>hello {name} a.k.a(Also Known As) {aka}</h1>
        {children}
        </div>
    ) 
}
export default Greet;