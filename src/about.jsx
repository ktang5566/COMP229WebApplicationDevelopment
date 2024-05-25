//about.jsx Kang Yee Tang 301328548 24-May-2024
import BBG from '../src/assets/BBG.png';
import '../src/index.css'
import '../src/about.css'
export default function About() {
     return <>
          <main>

               <section id="about">

                    <h2>About Me</h2><br/>
                    <img src={BBG} alt="profile" className="bbg" width="300" height="auto"/> <br/>
                    <p>Hello, I am <span className="name">Kathy Kang Yee Tang</span>.<br/>
                         I am a passionate Software Engineering Technician student with a keen interest in technology and innovation.<br/>
                         Currently pursuing my studies, I am dedicated to mastering the skills necessary
                         to design and develop efficient, user-friendly software solutions.</p>

               </section>

          </main>

     </>
}
    