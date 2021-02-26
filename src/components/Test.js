import axios from 'axios'
import React,{Component} from 'react'
class Test extends Component{
    constructor(props){
        super(props)
        this.state={
            userId:'',
            title:'',
            body:''
        }
    }
    changeHandler=(show)=>{
        this.setState({[show.target.name]:[show.target.value]})
    }
    submitHandler=(e)=>{
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(resp=>{
            console.log(resp)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    render(){
        const{userId,title,body}=this.state
        return(
            <div>
                HTTP Post
                <form onSubmit={this.submitHandler}>
                    <label>UserId: </label>
                    <input type='text'name='userId' value={userId} onChange={this.changeHandler}/><br/>
                    <label>Title: </label>
                    <input type='text' name="title" value={title}onChange={this.changeHandler}/><br/>
                    <label>Body: </label>
                    <input type='text' name='body' value={body} onChange={this.changeHandler}/><br/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}
export default Test