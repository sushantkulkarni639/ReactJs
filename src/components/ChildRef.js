import React,{Component} from 'react';
class ChildRef extends Component{
    constructor(props){
        super(props)
        this.inputRef=React.createRef()
    }
    inputFocus=()=>{
        this.inputRef.current.focus()
    }
    render(){
        return(
            <div>
                <label>User Name: </label>
                <input type="text" ref={this.inputRef}></input>
            </div>
        )
    }
}
export default ChildRef;
