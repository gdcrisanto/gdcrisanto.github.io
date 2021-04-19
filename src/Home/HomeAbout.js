import "./Home.scss";
import photo from "../GDC.jpg";
import email from "../GDC_email.png";
function HomeHeader() {
  return (
    
    <div className="row home-about" id="about">
      <div className="row about-main">
        <div className="col about-photo">
          <div className="row about-photo-container">
            <img src={photo} alt="Photo" />
          </div>
       </div>  

       <div className="col about-intro">
         <div className="row about-career">
            <h1>Web developer & <br/>Lifetime Student</h1>
        </div>
        
        <div className="row about-capabilities">
            I create solutions, I learn from challenges,<br></br> and I love what I do.
        </div>
        <div className="row about-capabilities">
            <div className="email">Email gdcrisanto@gmail.com</div>
        </div>
       </div>
      </div>
      <div className="col about-photo">
      </div>

      <div className="col about">

        <div className="row about-education">
          <h2>Education</h2>
          <h3>
            Kalaayan College, BS Computer Science, <br/>June 2019
          </h3>
          <p>
            I’m an aspiring fullstack web developer. I graduated Cum Laude with a degree in BS Computer
            Science. I’ve worked in digital marketing for a while where I designed, developed, and 
            managed multiple client websites.
          </p>
        </div>

        <div className="row about-experience">
          <h2>Experience</h2>
          <h3>
            Languages<br/>
            HTML, CSS, JavaScript, PHP, MySQL
          </h3>
          <h3>
            Frameworks/ Libraries/ Others<br/>
            React.js, Babel, Git, NPM, Node.js
          </h3>
          <h3>
            Others Skills<br/>
            WordPress, Google Tag Manager, Google Analytics, Facebook Business Manager, Facebook Pixels
          </h3>
          <p>
            As a web developer, I commit myself to telling stories using the ideas of clients as a foundation. 
          </p>
        </div>

        <div className="row about-interests">
          <h2>Interests</h2>
          <h3>
            Hobbies <br/>Reading, Drawing, Gaming, Traveling
          </h3>
          <p>
            In my spare time, I love to immerse myself into stories of different mediums. Whether it’s written, drawn, portrayed in movies, or even in video games, the excitement of entering a different world never betrays me.
          </p>
        </div>
      </div>

    </div>
  );
}

export default HomeHeader;