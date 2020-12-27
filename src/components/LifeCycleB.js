import React,{Component} from 'react';
class LifeCycleB extends Component{
    constructor(){
        super()
        this.state={
            name:'sushant'
        }
        console.log("constructor lifecycleB")
    }
    static getDerivedStateFromProps(){
        console.log("getDerivedStateFromProps lifecycleB")
        return null;
    }
    componentDidMount(){
        console.log("componentDidMount lifecycleB")
    }
    render(){
        console.log("render lifecycleB")
        return(
            <div>
                LifeCycleB
            </div>
        )
    }
}
export default LifeCycleB;