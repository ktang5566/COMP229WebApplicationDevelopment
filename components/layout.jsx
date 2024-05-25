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
    <li><Link to={"/"} className={"nav"}> Home Page</Link></li>
    <li><Link to={"/about"} className={"nav"}>About Me</Link></li>
    <li><Link to={"/projects"} className={"nav"}>Projects</Link></li>
    <li><Link to={"/services"} className={"nav"}>Services</Link></li>
    <li><Link to={"/contact"} className={"nav"}>Contact</Link></li>
   </ul>
  </nav>

 </>
 
 );
}
