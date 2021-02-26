import React,{Component} from 'react'
class RefsDemo extends Component{
    constructor(props){
        super(props)
        this.inputRef=React.createRef()
    }
    componentDidMount(){
        this.inputRef.current.focus()
    }
    eventHandler=()=>{
        alert(this.inputRef.current.value)
    }
    render(){
        return(
            <div>
                <label>User Name: </label>
                <input type="text" ref={this.inputRef}></input><br></br>
                <button onClick={this.eventHandler}>Submit</button>
            </div>
        )
    }
}
export default RefsDemo;