import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Wellcome from './components/Wellcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import Functionclick from './components/Functionclick';
import Classclick from './components/Classclick';
import Eventbind from './components/Eventbind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import { Fragment } from 'react';
import FragmentDemo from './components/FragmentDemo';
import PureComp from './components/PureComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import RefDemo2 from './components/RefDemo2';
import ChildRef from './components/ChildRef';
import ParentRef from './components/ParentRef';
import FRParent from './components/FRParent';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import CounterClick from './components/CounterClick';
import CounterClick11 from './components/CounterClick11';
import HoverClick from './components/HoverClick';
import ClickCounter from './components/ClickCounter';
import ClickHover from './components/ClickHover';
import User from './components/User';
import RenderProps from './components/RenderProps';
import ComponentA from './components/ComponentA';
import { UserProvider } from './components/UserContext';
import PostList from './httpcomponents/PostList';
import PostForm from './httpcomponents/PostForm';
import ListRender from './components/ListRender';
import ListRender1 from './components/ListRender1';
import Test from './components/Test';
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
      {/* <LifeCycleA></LifeCycleA> */}
      {/* <FragmentDemo></FragmentDemo> */}
      {/* <PureComp></PureComp> */}
      {/* <RefsDemo></RefsDemo> */}
      {/* <FocusInput></FocusInput> */}
      {/* <RefDemo2></RefDemo2> */}
      {/* <ChildRef></ChildRef> */}
      {/* <ParentRef></ParentRef> */}
      {/* <FRParent></FRParent> */}
      {/* <PortalDemo></PortalDemo> */}
      {/* <ErrorBoundary>
      <Hero heroName="sushant" />
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName="ishant" />
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName="jocker" />
      </ErrorBoundary> */}
      {/* <CounterClick name="sushant"/> */}
      {/* <CounterClick11 /> */}
      {/* <HoverClick name="sushant"/> */}
      {/* <ClickCounter/>
      <ClickHover/>
      <User render={(isLoggedin)=>isLoggedin?"sushant" :"guest"}/> */}
      {/* <RenderProps render={(count,eventHandler)=> <ClickHover count={count} eventHandler={eventHandler}/>}/>
      <RenderProps render={(count,clickHandler)=> <ClickCounter count={count} clickHandler={clickHandler}/>}/> */}
      {/* <UserProvider value="vishal">
        <ComponentA/>
      </UserProvider> */}
      {/* <PostList/> */}
      {/* <PostForm/> */}
      {/* <ListRender/>  */}
      {/* <ListRender1/> */}
      <Test/>
      

    </div>
  );
}

export default App;
