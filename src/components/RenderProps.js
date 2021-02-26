import React,{Component} from 'react';
class RenderProps extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    clickHandler=()=>{
        this.setState(prevState=>{
            return{count:prevState.count+1}
        })
    }
    eventHandler=()=>{
        this.setState(prevState=>{
            return{count:prevState.count+1}
        })
    }
    render(){
        return(
            <div>
                {this.props.render(this.state.count,this.clickHandler,this.eventHandler)}
            </div>
        )
    }
}
export default RenderProps;