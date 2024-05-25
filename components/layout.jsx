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
    <li><a href ={"/"} className={"nav"}> Home Page</a></li>
    <li><a href ={"/about"} className={"nav"}>About Me</a></li>
    <li><a href ={"/projects"} className={"nav"}>Projects</a></li>
    <li><a href ={"/services"} className={"nav"}>Services</a></li>
    <li><a href ={"/contact"} className={"nav"}>Contact</a></li>
   </ul>
  </nav>

 </>
 
 );
}
