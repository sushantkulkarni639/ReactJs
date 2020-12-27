import React,{Component} from 'react';
class Form extends Component{
    constructor(){
        super()
        this.state={
            username:"",
            comments:'',
            SelectTopic:"React"
        }
    }
    onchangeHandler=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    commentsHandler=(event)=>{
        this.setState({
            comments:event.target.value
        })
    }
    topicHandler=(event)=>{
        this.setState({
            SelectTopic:event.target.value
        })
    }
    submitHandler=(event)=>{
        alert(`${this.state.username}, ${this.state.comments}, ${this.state.SelectTopic}`)
        event.preventDefault()
    }
    render(){
        return(
            <form onSubmit={this.submitHandler}>
                <div>
                    <label>Username </label>
                    <input type='text' value={this.state.username} onChange={this.onchangeHandler}></input>
                </div>
                <div>
                    <label>Comments: </label>
                    <textarea type="text" value={this.state.comments} onChange={this.commentsHandler}></textarea>
                </div>
                <div>
                    <label >SelectTopic </label>
                    <select value={this.state.SelectTopic} onChange={this.topicHandler}>
                        <option>React</option>
                        <option>Angular</option>
                        <option>Vue</option>
                    </select>
                </div>
                <button>Submit</button>
            </form>
        )
    }
}
export default Form;
