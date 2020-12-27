import React,{Component} from 'react';
import ChildComponent from "./ChildComponent";
class ParentComponent extends Component{
    constructor(props){
        super(props)
            this.state={
                parentName:'Parent'
            }
            this.greetParent=this.greetParent.bind(this)
    }
    greetParent(childName){
        alert(`Hello my dear ${this.state.parentName} with ${childName}`)
    }
    render(){
        return(
            <div>
                <ChildComponent clickHandler={this.greetParent}></ChildComponent>
            </div>
        )
    }
}
export default ParentComponent;