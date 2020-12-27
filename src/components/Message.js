import React, {Component} from 'react';
class Message extends Component{
    constructor(){
        super()
        this.state={
            message:'Hi this is Message class Component'
        }
    }
    changeText(){
        console.log("button working");
        this.setState({
            message:"The text is changed using setState"
            
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeText()}>Change Text</button>
            </div>
        )
    }
}
export default Message;