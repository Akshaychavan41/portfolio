import React from "react";
import SocialMedia from "../socialMedia/SocialMedia";
import "./Home.css";
import { ReactComponent as CodingSvg } from "../../Assets/svg/customCoding.svg";
function Home(props) {
  return (
    <div className="home__root">
      <div className="home__typography">
        <h1>Akshay Chavan</h1>
        <h4>Web Developer || Photographer || Mechanical Engineer</h4>
        <SocialMedia />
      </div>
      <div className="codingSvg">
        <CodingSvg />
      </div>
    </div>
  );
}

export default Home;
