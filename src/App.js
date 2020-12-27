import logo from './logo.svg';
import './App.css';
import  Greet  from './components/Greet';
import  Wellcome  from './components/Wellcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import Functionclick from './components/Functionclick';
import Classclick from './components/Classclick';
import  Eventbind from './components/Eventbind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
function App() {
  return (
    <div className="App">
       {/* <Greet name="siraj" aka="sirya">Hi this is children of siraj</Greet> */}
      {/*<Greet name="siraj" aka="maraj">Hi this is child of miraj</Greet>
      <Greet name="siraj" aka="shivraj">Hi this is child of shivraj</Greet>*/}
      {/* <Wellcome name="vishaluu">Props are immutable</Wellcome> */}
       {/* <Hello></Hello>  */}
      {/* <Message></Message> */}
      {/* <Counter></Counter> */}
      {/* <Functionclick></Functionclick> */}
      {/* <Classclick></Classclick> */}
      {/* <Eventbind></Eventbind> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <UserGreeting></UserGreeting> */}
      {/* <NameList></NameList> */}
      {/* <StyleSheet primary={true}></StyleSheet> */}
      {/* <Inline></Inline> */}
      {/* <Form></Form> */}
      <LifeCycleA></LifeCycleA>

    </div>
  );
}

export default App;
