import React from "react";
import "./Skills.css";
import ReactLogo from "../../Assets/skills/react.svg";
import AngularLogo from "../../Assets/skills/angular.svg";
import JsLogo from "../../Assets/skills/javascript.svg";
import TsLogo from "../../Assets/skills/typescript.svg";
import HTMLLogo from "../../Assets/skills/html.svg";
import CSSLogo from "../../Assets/skills/css.svg";
import ReduxLogo from "../../Assets/skills/redux.svg";
import BootstrapLogo from "../../Assets/skills/bootstrap.svg";
import NodeLogo from "../../Assets/skills/nodejs.svg";
import { Fade } from "react-reveal";

function Skills(props) {
  return (
    <Fade right>
      <div id="skills" className="skills__root">
        <h1 className="title">My Skillsets</h1>
        <div className="skills__container">
          <div className="outer">
            {" "}
            <img className="logo" src={ReactLogo} />
            <h5>React</h5>
          </div>
          <div className="outer">
            {" "}
            <img className="logo" src={AngularLogo} />
            <h5>Angular</h5>
          </div>
          <div className="outer">
            {" "}
            <img className="logo" src={JsLogo} />
            <h5>Javascript</h5>
          </div>
          <div className="outer">
            {" "}
            <img className="logo" src={TsLogo} />
            <h5>Typescript</h5>
          </div>
          <div className="outer">
            {" "}
            <img className="logo" src={HTMLLogo} />
            <h5>HTML</h5>
          </div>
          <div className="outer">
            {" "}
            <img className="logo" src={CSSLogo} />
            <h5>CSS</h5>
          </div>
          <div className="outer">
            <img className="logo" src={BootstrapLogo} />
            <h5>Bootstrap</h5>
          </div>
          <div className="outer">
            <img className="logo" src={ReduxLogo} />
            <h5>Redux</h5>
          </div>
          <div className="outer">
            <img className="logo" src={NodeLogo} />
            <h5>Node.js</h5>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Skills;
