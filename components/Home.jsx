//home.jsx Kang Yee Tang 301328548 24-May-2024
import { Link } from 'react-router-dom';
import '../src/home.css'
import hire from '../src/assets/hire.png';

export default function Home() {
     return <>
          <main>
               <section id="intro">
                    <div className="introContent">
                         <span className="hello">Hello,</span>
                         <p className="introPara">My mission is to continuously learn, innovate, and apply my skills to solve real-world problems. <br/>
                              Explore my website to learn more about my information, projects, and services,
                              and how we can collaborate to make a positive difference through technology.</p>
                         <br/>
                         <p>Know more about me!</p>
                         <Link to={"/about"}><button className="btn"><img src={hire} alt="Hire me" width="100px" height="100px"/></button></Link>

                    </div>

               </section>

          </main>
     </>
     }
    