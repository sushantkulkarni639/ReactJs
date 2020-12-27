import React, { Component } from 'react';
class Wellcome extends Component {
    render(){
        const{name,children}=this.props;
        
        return(
            <div>
                <h1>This is Wellcome class Component of name {name}</h1>
                {children}
            </div>
        )
    }
}
export default Wellcome;
