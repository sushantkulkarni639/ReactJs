import React,{Component} from 'react';
class Eventbind extends Component{
    constructor(){
        super()
        this.state={
            message:"Hello to eventbind"
        }
        this.clickhandler=this.clickhandler.bind(this);
    }
    clickhandler(){
        this.setState({
            message:"This has bee changed to Two way binding"
        }) 
    }
    render(){
        return(
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickhandler.bind(this)}>Click to Bind</button> */}
                {/* <button onClick={()=>this.clickhandler()}>Click to Bind</button> */}
                <button onClick={this.clickhandler}>Click to Bind</button>
            </div>
        )
    }
}
export default Eventbind;