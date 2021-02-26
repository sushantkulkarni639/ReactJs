import React,{Component} from 'react';
class ClickHover extends Component{
    render(){
        const{count,eventHandler}=this.props
        return(
            <div>
                <p onMouseOver={eventHandler}><b/>Hello Sushant {count} times</p>
            </div>
        )
    }
}
export default ClickHover;
        // render props