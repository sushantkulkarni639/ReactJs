import React from 'react';
const withCounter =(WrapperCopm,increment) =>{
    class withCounter extends React.Component{
        constructor(props){
            super(props)
            this.state={
                count:0
            }
        }
        Hoverhandle=()=>{
            this.setState(prevState=>{
                return{count:prevState.count+increment}
            })
        }
        clickHandler=()=>{
            this.setState(prevState=>{
                return{count:prevState.count+increment}
            })
        }
        render(){
            console.log(this.props.name)
            return(
                <WrapperCopm count={this.state.count} 
                clickHandler={this.clickHandler} Hoverhandle={this.Hoverhandle} {...this.props}/>
                
            )
        }
    }
    return withCounter

}
export default withCounter;