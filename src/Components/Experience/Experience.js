import { Card, Typography } from "@material-ui/core";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@material-ui/lab";
import React from "react";
import "./Experience.css";
import { Fade } from "react-reveal";

function Experience(props) {
  return (
    <Fade right>
      <div id="exp" className="exp__root">
        <h1 className="page__title">Experience</h1>
        <div className="card">
          <div className="experience">
            <Timeline>
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography className="company" color="textSecondary">
                    Frontend Developer @Rebel Foods
                  </Typography>
                  <Typography className="company" color="textSecondary">
                    Apr 21 - Present
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className="content">
                  <ul>
                    <li>
                      Working on a Inventory Management Product used by over 300
                      Kitchens to manage and keep track of inventories, track
                      wastage, calculate ideal food cost.
                    </li>
                    <li>
                      Responsible for building responsive web pages in React.
                    </li>
                    <li>
                      Working closely with product team to understand the
                      requirement and planning the execution
                    </li>
                  </ul>
                  <br />
                  <h3>Tech Stack-: React, Node, MongoDB</h3>
                </TimelineContent>
              </TimelineItem>
              <br />
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography className="company" color="textSecondary">
                    System Engineer @Infosys
                  </Typography>
                  <Typography className="company" color="textSecondary">
                    Feb 19 - Apr-21
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className="content">
                  <ul>
                    <li>
                      Part of Agile Development Team which continuously
                      implements, maintains and delivers new features to client.
                    </li>
                    <li>
                      Developed reusable UI components using HTML, Typescript,
                      Angular 6. And Integrated it using Spring RestAPI
                    </li>
                    <li>
                      Optimized the UI experience by implementing lazy loading
                      and debounce. Which decreased the loading time by 40%
                    </li>
                  </ul>
                  <br />
                  <h3>Tech Stack-: Angular, Java</h3>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Experience;
