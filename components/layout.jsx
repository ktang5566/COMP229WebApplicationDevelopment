import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/assets/logo.png';
export default function Layout() {
 return (
 <>
  <header>
   <a href = {"/"}><img src={logo}alt="logo" className="logo" width="60px" height="60px"/></a>
   <a href = {"/"}><h1 className={"title"}>Kathy Tang</h1></a>
  </header>

  <nav className={"navbar"}>
   <ul>
    <Link to={"/"} className={"nav"}><li>Home Page</li></Link>
    <Link to={"/about"} className={"nav"}><li>About Me</li></Link>
    <Link to={"/projects"} className={"nav"}><li>Projects</li></Link>
    <Link to={"/services"} className={"nav"}><li>Services</li></Link>
    <Link to={"/contact"} className={"nav"}><li>Contact</li></Link>
   </ul>
  </nav>

 </>
 
 );
}
