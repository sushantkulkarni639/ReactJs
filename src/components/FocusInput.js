import React,{Component} from 'react';
import InputRef from './InputRef';
class FocusInput extends Component{
    constructor(props){
        super(props)
        this.compoRef=React.createRef()
    }
    clickHandle=()=>{
        this.compoRef.current.focusInput()
    }
    render(){
        return(
            <div>
                <InputRef ref={this.compoRef}></InputRef>
                <button onClick={this.clickHandle}>Class Ref</button>
            </div>
        )
    }
}
export default FocusInput;