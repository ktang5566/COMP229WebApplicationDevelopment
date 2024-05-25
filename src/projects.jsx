import project1 from '../src/assets/WebDevelopment.jpg';
import project2 from '../src/assets/PhotoGallery.jpg';
import project3 from '../src/assets/BugSmasher.jpg';
import '../src/project.css'

export default function Projects() {
     return (
     <>
         <main>
             <h2>My Projects</h2>
             <div className={"projectBar"}>
             <a href="http://studentweb.cencol.ca/ktang56/comp213/final-project/home.html"><h3 className="projectTitle">Real Estate Agent Website</h3></a>
             <p className={"projectDesc"}>This project involved creating a user-friendly platform that showcases property listings, highlights the agent&#39;s expertise, and provides valuable resources for home buyers.</p>
             <img src={project1} alt="project1" width="auto" height="500"/> <br/>
             </div>

             <div className={"projectBar"}>
             <a href="http://studentweb.cencol.ca/ktang56/comp125/assignment2/js05.html"><h3 className="projectTitle">Photo Gallery</h3></a>
             <p className={"projectDesc"}>A photo gallery website designed for users to explore and select their favorite photos.
                 This website features a clean and elegant interface where users can browse through a curated collection of images.
                 By clicking on a photo, users can view a zoomed-in version, allowing them to appreciate the finer details.</p>
             <img src={project2} alt="project2" width="auto" height="500"/> <br/>
             </div>

             <div className={"projectBar"}>
             <a href="http://studentweb.cencol.ca/ktang56/comp125/assignment3/assignment3.html"><h3 className="projectTitle">Bug Smasher</h3></a>
             <p className={"projectDesc"}>In Bug Smasher—a fun and interactive game website, users aim to smash mosquitoes by clicking on them.
                 Each successful hit adds to the user&#39;s score, and as the score increases, the mosquitoes appear faster,
                 making the game progressively more challenging.</p>
             <img src={project3} alt="project3" width="auto" height="500"/> <br/>
             </div>

         </main>
     </>
     );
}
    