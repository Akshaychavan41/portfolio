import React from "react";
import SocialMedia from "../socialMedia/SocialMedia";
import "./Home.css";
import { ReactComponent as CodingSvg } from "../../Assets/svg/customCoding3.svg";
import { Fade } from "react-reveal";
import Arrow from "../Arrow/Arrow";
function Home(props) {
  const handleScroll = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="home__root">
        <div className="arrow" onClick={handleScroll}>
          <Arrow />
        </div>
        <div className="home__typography">
          <h1>Akshay Chavan</h1>
          <h4>Frontend Developer || Software Engineer || Photographer</h4>
          <SocialMedia />
        </div>
        <div className="codingSvg">
          <CodingSvg />
        </div>
      </div>
    </Fade>
  );
}

export default Home;
