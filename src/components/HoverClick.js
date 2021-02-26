import React,{Component} from 'react';
import withCounter from './withCounter'
class HoverClick extends Component{
    render(){
        const{count,Hoverhandle}=this.props
        return(
            <div>
                <h1 onMouseOver={Hoverhandle}>{this.props.name} Hovered {count} tiimes</h1>
            </div>
        )
    }
}
export default withCounter(HoverClick,3);