import "./Home.scss";
import HomeAbout from "./HomeAbout";
import HomeWork from "./HomeWork";
import HomeContact from "./HomeContact";
function Home() {
  return (
    <div className="home-container">
      <div className="row">
          <HomeAbout/>
          <HomeWork/>
          <HomeContact/>
      </div>
    </div>
  );
}

export default Home;