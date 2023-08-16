import React, { Component } from "react";
import Nav from './components/Nav'
import Promo from './components/Promo'
import Intro1 from './components/Intro1'
import Intro2 from './components/Intro2'
import Intro3 from './components/Intro3'
import Footer from './components/Footer'
import Person from './components/props/Object'
import Button from './components/props/Function'
import ParentComponent from "./components/props/child"


function Heading() {
  return (<h1>Welcome to my Blog</h1>);
  }
  
function App() {
  return ( 
    <div className="App"> 
      <Heading /> 
      <Nav />
      < Promo />
      <Intro1 />
      <Intro2 />
      <Intro3 />
      <Footer />
      <div>
      {/* importing the object props */}
      <Person person={{name:'Shaik', age: 25}} />
      <Person person={{name:'Adam',age:5}} />
      </div>

      <div>
      {/* importing the function as pros */}
      <Button onClick={()=> alert('Buttons is clicked')} />
      </div>

      <div>
        {/* using the child and parent components */}
        <ParentComponent>
          <p>This is the child Component</p>
        </ParentComponent>
      </div>
      </div>
  ); 
} 

export default App;
