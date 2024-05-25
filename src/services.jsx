//services.jsx Kang Yee Tang 301328548 24-May-2024
import service1 from '../src/assets/service1.jpg';
import service2 from '../src/assets/service2.jpg';
import service3 from '../src/assets/service3.jpg';
import service4 from '../src/assets/service4.jpg';
import '../src/index.css'
import '../src/services.css'
export default function Project() {
     return <>
     <main>

          <h2>My Services</h2>
          <p className="serviceDesc">In addition to my studies, I offer services to help clients set up and design their websites or software.
              My goal is to create solutions that are not only functional but also aesthetically pleasing and user-friendly. <br/>
              Whether you&#39;re a small business owner looking to establish an online presence or need custom software to streamline
              your operations, I&#39;m here to help.</p>

          <div className="serviceBars">
              <div className={"serviceBar"}>
                  <span className={"service"}>Web Development</span><br/>
                  <img src={service1} alt="service1" className="serviceImg" />
              </div>

              <div className={"serviceBar"}>
                  <span className={"service"}>General Programming</span><br/>
                  <img src={service2} alt="service2" className="serviceImg"/>
              </div>

              <div className={"serviceBar"}>
                  <span className={"service"}>Database Design</span><br/>
                  <img src={service3} alt="service3" className="serviceImg"/>
              </div>

              <div className={"serviceBar"}>
                  <span className={"service"}>Mobile Application</span><br/>
                  <img src={service4} alt="service4" className="serviceImg"/>
              </div>

          </div>

     </main>

     </>
    }
    