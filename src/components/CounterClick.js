import React,{Component} from 'react';
import withCounter from './withCounter'
class CounterClick extends Component{
    render(){
        const{count,clickHandler}=this.props
        return(     
            <div>
                <button onClick={clickHandler}>{this.props.name} Click {count} times</button>
            </div>
        )
    }
}
export default withCounter (CounterClick,2);