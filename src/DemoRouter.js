import {Routes , Route, Link } from 'react-router-dom';
import React from 'react';
import { Button } from 'bootstrap';
import Signup from './Signup';

const Welcome =()=>{
    return <h1>welcome to React app</h1>
}
const Home=()=>{
    return <h1>Home Page</h1>
}
const Person=()=>{
    return <h1>Person Page</h1>
}
const About=()=>{
    return <h1>About Page</h1>
}
const NotFound=()=>{
    return(
    <div>
        <h1>404 Not found</h1>
        <Link to="/">Go Home</Link>
    </div>
    )
}


function DemoRouter()  {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> 
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link to="/" className="navbar-brand">React</Link>
            </li>
            <li>
                <Link to="/home" className="navbar-brand">Home</Link>
            </li>
            <li>
                <Link to="/person" className="navbar-brand">Person</Link>
            </li>
            <li>    
                <Link to="/about" className="navbar-brand">About us</Link>
            </li> 
            
            <li>
              <button onClick="signup" className="btn btn-primary" ><Link to="/signup" className="navbar-brand">Signup</Link></button>
            </li>

        </ul>
        
    </nav>
         
    <Routes>
    <Route exact path="/" element={<Welcome/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/person" element={<Person/>} />
    <Route path="/about" element={<About/>} />
   <Route element={<NotFound/>}/>
   <Route path="/signup" element={<Signup/>} />
   

   
   </Routes>
</div>
  );
}

export default DemoRouter;
