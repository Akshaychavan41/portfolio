import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React from "react";
import "./About.css";
import profile from "../../Assets/profile.jpg";
import { Fade } from "react-reveal";
function About(props) {
  return (
    <Fade right>
      <div id="about" className="about__root">
        <Typography
          gutterBottom
          variant="h3"
          className="heading"
          component="h2"
        >
          About Me
        </Typography>
        <Card className="about__card">
          <CardContent className="card__content">
            <Typography gutterBottom variant="body1" className="main">
              Hello! I am Akshay, a Front-end Developer
            </Typography>
            <Typography gutterBottom variant="body1" className="main">
              I am passionate about front-end technologies, particularly HTML5,
              CSS3, Javascript and React js. I like creating awesome websites
              using the latest technologies.
            </Typography>
            <Typography gutterBottom variant="body1" className="main">
              I enjoy creating things that live on the internet, whether that be
              websites, applications, or anything in between. My goal is to
              always build products that provide pixel-perfect, performant
              experiences.
            </Typography>
            <Typography gutterBottom variant="body1" className="main">
              I also like to click pictures! 📷
            </Typography>
          </CardContent>
          <div className="profile__container">
            <img src={profile} className="profile" />
          </div>
        </Card>
      </div>
    </Fade>
  );
}

export default About;
