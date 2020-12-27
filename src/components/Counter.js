import React, {Component, useCallback} from 'react';
class Counter extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    countChange=()=>{
        // this.setState({count:this.state.count +1},
        //     ()=>{console.log('callBack',this.state.count)
        // })
        this.setState((prevState)=>({
            count:prevState.count+1
        })
        )
        console.log(this.state.count);
    }
    incrementFive=()=>{
        this.countChange();
        this.countChange();
        this.countChange();
    }
    render(){
        return(
            <div>
              <div>count={this.state.count}</div>
              <button onClick={()=> this.incrementFive()}>Count Button</button>
            </div>
        )
    }
}
export default Counter;