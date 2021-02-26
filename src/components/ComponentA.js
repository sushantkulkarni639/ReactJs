import React,{Component} from 'react';
import ComponentB from './ComponentB';
// import ComponentB from './components/ComponentB';
class ComponentA extends Component{
    render(){
        return(
            <ComponentB/>
        )
    }
}
export default ComponentA;