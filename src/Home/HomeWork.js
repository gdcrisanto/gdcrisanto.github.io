import "./Home.scss";

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
        <Works/>
      </div>
    </div>
  );
}

export default HomeWork;