import React,{Component} from 'react';
import FRinput from './FRinput';
class FRParent extends Component{
    constructor(props){
        super(props)
        this.inputref=React.createRef()
    }
    clickHandle=()=>{
        this.inputref.current.focus()
    }
    render(){
        return(
            <div>
                <FRinput ref={this.inputref}></FRinput>
                <button onClick={this.clickHandle}>FRParent Button</button>
            </div>
        )
    }
}
export default FRParent;