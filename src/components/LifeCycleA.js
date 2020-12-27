import React,{Component} from 'react';
import LifeCycleB from './LifeCycleB';
class LifeCycleA extends Component{
    constructor(){
        super()
        this.state=({
            name:'sushant'
        })
        console.log("Constructor lifecycleA")
    }
    static getDerivedStateFromProps(Props,state){
        console.log("getDerivedStateFromProps lifecycleA")
        return null;
    }
    componentDidMount(){
        console.log("componentDidMount lifecycleA   ")
    }
    render(){
        console.log("render lifecycleA")
        return(
            <div>
                <LifeCycleB></LifeCycleB>
            <div>LifeCycleA</div>
            </div>
        )
    }
}
export default LifeCycleA;