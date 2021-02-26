import { render } from '@testing-library/react';
import React,{Component} from 'react';
class RefDemo2 extends Component{
    constructor(props){
        super(props)
        this.inputref= React.createRef()
    }
    componentDidMount(){
        this.inputref.current.focus()
    }
    handleClick=()=>{
        alert(this.inputref.current.value)
    }
    render(){
        return(
            <div>
                <label>User Name: </label>
                <input type="text" ref={this.inputref}></input><br></br>
                <button onClick={this.handleClick}>Click Ref</button>
            </div>
        )
    }
}
export default RefDemo2;
//Repeated one
