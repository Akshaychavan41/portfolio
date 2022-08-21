import { Button } from "@material-ui/core";
import React from "react";
import "./Projects.css";
import netflixImg from "../../Assets/netflix.png";
import ebookImg from "../../Assets/ebook.png";
import game2048 from "../../Assets/2048.png";
import inventoryImg from "../../Assets/inventory.png";
import githubImg from "../../Assets/skills/github.svg";
import { Fade } from "react-reveal";
const Projects = () => {
  const projects = [
    {
      name: "Netflix-Clone",
      desc: "This is a practice project where I tried to build a clone of Netflix using React, Redux.",
      img: netflixImg,
      github: "https://github.com/Akshaychavan41/netflix-clone",
    },
    {
      name: "Ebook Reader",
      desc: "This project helps to open Epub files on browser. Build using React",
      img: ebookImg,
      deployed: "https://akshaychavan41.github.io/epub-reader",
      github: "https://github.com/Akshaychavan41/epub-reader",
    },
    {
      name: "2048 Game",
      desc: "A fancy 2048 game build with React, Typescript",
      img: game2048,
      deployed: "https://akshaychavan41.github.io/2048-game/",
      github: "https://github.com/Akshaychavan41/2048-game",
    },
    {
      name: "Inventory App",
      desc: "This app allows to perform CRUD operations for inventories. Full-Stack app build using Angular, SpringBoot & Mysql",
      img: inventoryImg,
      github: "https://github.com/Akshaychavan41/inventoryApp",
    },
  ];
  return (
    <Fade right>
      <div id="project" className="projects__container">
        <h1 className="title">Projects</h1>
        <div className="inner">
          {projects.map((item) => (
            <div className="inner__Card">
              <img className="card__img" src={item.img} />
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <div className="buttons">
                {item.deployed && (
                  <a
                    href={item.deployed}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <Button variant="contained" color="primary">
                      Live Build
                    </Button>
                  </a>
                )}
                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <Button variant="contained" color="primary">
                      Repo
                      <img src={githubImg} />
                    </Button>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
};

export default Projects;
