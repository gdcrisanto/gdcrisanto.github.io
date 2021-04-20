import "./Home.scss";
import KD from "../KD.png"
import FBW from "../FBW.png"
import DV from "../DV.png"
import SS from "../SS.png"
import MP from "../MP.png"

import Works from './Works.js';

function HomeWork() {
  return (
    <div className="row home-work" id="work">
      <div className="home-work-container">
        <div className="row work-title">
          <h1>Work</h1>
        </div>
        <div className="row work-subtitle">
            Previous projects and the roles I played in them.  
        </div>
        <div className="row work-portfolio">
            <div className="katapult portfolio">
              <img  src={KD} alt="Work" />
              <div>
                <h4>Katapult Digital</h4>
                <p>Web Developer & Tech Specialist</p>
              </div>
            </div> 
            <div className=" belgian portfolio">
              <img  src={FBW} alt="Work" />
              <div>
                <h4>Famous Belgian Waffles</h4>
                <p>Web Developer</p>
              </div>
            </div> 
            <div className=" katapult portfolio">
              <img  src={DV} alt="Work" />
              <div>
                <h4>digi-VORTEX</h4>
                <p>Web Developer</p>
              </div>
            </div> 
        </div>
        <div className="row work-portfolio">
            <div className=" sinag portfolio">
              <img  src={SS} alt="Work" />
              <div>
                <h4>Sinag Solutions</h4>
                <p>Web Developer</p>
              </div>
            </div> 
            <div className=" markprof portfolio">
              <img  src={MP} alt="Work" />
              <div>
                <h4>MarkProf Foundation</h4>
                <p>Web Developer</p>
              </div>
            </div>
            <div>
              <Works/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default HomeWork;