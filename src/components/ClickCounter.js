import React,{Component} from 'react';
class ClickCounter extends Component{
    render(){
        const{count,clickHandler}=this.props
        return(
            <div>
                <button onClick={clickHandler}>Click {count} times</button>
            </div>
        )
    }
}
export default ClickCounter;

        // Render Props