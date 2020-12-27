import React,{Component} from 'react';
class Classclick extends Component{
     clicking=()=>{
        console.log("Class got clicked");
    }
    render(){
        return(
            <div>
                <button onClick={this.clicking}>Class Click</button>
            </div>
        )
    }
}
export default Classclick;