import React,{Component} from 'react';
import ChildRef from './ChildRef';

class ParentRef extends Component{
    constructor(props){
        super(props)
        this.paref= React.createRef()
    }
    handleClick=()=>{
        this.paref.current.inputFocus()
    }
    render(){
        return(
            <div>
                <ChildRef ref={this.paref}></ChildRef>
                <button onClick={this.handleClick}>Click to childRef</button>
            </div>
        )
    }
}
export default ParentRef;