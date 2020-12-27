import React,{Component} from 'react';
class UserGreeting extends Component{
    constructor(props){
        super(props)
            this.state={
                isLogged:false
            }
    }
    render(){
        return(
            this.state.isLogged?(<div>isLogged is true</div>):(<div>isLogged is false</div>)
        )

        // let message;
        // if(this.state.isLogged){
        //     message=<div>isLogged is true</div>
        // }else{
        //     message=<div>isLogged is false</div>
        // }
        // return(
        //     <div>{message}</div>
        // )
        // if(this.state.isLogged){
        //     return(
        //         <div>isLogged is true</div>
        //     )
        // }else
        // return(
        //     <div>isLogged is false</div>
        // )
    }
}
export default UserGreeting;