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
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate lifecycleA")
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("getSnapshotBeforeUpdate lifecycleA")
        return null
    }
    componentDidUpdate(){
        console.log("componentDidUpdateLifeCycleA")
    }
    changeState=()=>{
        this.setState({
            name:"vishal"
        })
    }
    render(){
        console.log("render lifecycleA")
        return(
            <div>
                <div>LifeCycleA</div>
            <button onClick={this.changeState}>change state</button>
                <LifeCycleB></LifeCycleB>
            
            </div>
        )
    }
}
export default LifeCycleA;