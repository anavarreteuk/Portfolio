import React from "react";
import "./about-me.css";
import Img from "gatsby-image";
import Git from "../images/git.png";
import Js from "../images/js.png";
import Github from "../images/github.png";
import Reactp from "../images/react.png";
import Redux from "../images/redux.png";
import Ruby from "../images/ruby.png";
import Rails from "../images/rails.png";
import Html from "../images/html.png";
import Css from "../images/css3.png";
import PG from "../images/postgresql.png";
import VS from "../images/visual.png";
import Node from "../images/nodejs.png";
import Mongo from "../images/mongodb.png";
import Heroku from "../images/heroku.png";

const AboutMe = ({ profileImg }) => {
  return (
    <section id="about" className="section">
      <h2 className="text-center">ABOUT ME</h2>
      <div className="section-content">
        <div className="row">
          <div className="col-16 col-sm-6 offset-sm-1 col-md-3 offset-md-0 col-lg-3 offset-lg-1 ">
            <Img
              title="Profile image"
              alt="Large image of Adrian"
              sizes={profileImg.sizes}
              className="img-responsive center-block"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <h4>Summary</h4>
            <p>
              Full stack web developer with strong experience in orchestral
              music and music theory. I love team-oriented environments and
              problem-solving in order to bring new technologies to market. I
              think that working with teams, sharing each others’ experiences
              and skill sets, is when the best results are achieved. As a
              musician and oboe player, I understand the value of practise and
              discipline, and I love bringing these skills to software
              development.
            </p>
          </div>
        </div>
        <br />
        <h4 className="text-center">Experience</h4>
        <br />
        <div className="row">
          <div className=" col-12 col-md-5 col-lg-5 offset-lg-1">
            <div className="box">
              <h5>
                <i>Full Stack Web Developer</i>
              </h5>
              <h6>Freelance Full Stack Web Developer Jan 2019 - Now</h6>
              <p>
                Working on freelance, personal projects and hacking on with new
                software stack and libraries.
              </p>
            </div>
          </div>

          <div className="col-lg-5 col-md-5 col-6 ">
            <div className="box">
              <h5>Full Stack Web Developer in Training</h5>
              <h6>
                <i>Flatiron School Sep 2018 - Jan 2019</i>
              </h6>
              <p>
                Intensive 15 Week full-time Software Engineering Bootcamp in
                London.
              </p>
              {/* <b>Programming Fundamentals: </b>
              HTML, CSS, JavaScript, Ruby, Git, OOP, TDD.<br />
              <b>Frameworks: </b>
              Sinatra, Rails.<br />
              <b>Front-end Frameworks: </b>
              React, Redux. */}
            </div>
          </div>
        </div>
        <h4 className="text-center">Skills</h4>
        <br />

        {/* <div className="row">
          <div className=" col-12 col-md-6 col-lg-6 offset-lg-1">
            <div className="box">
              <h5>Toolbox</h5>
              <p>
                <b>Languages and Frameworks:</b> Javascript, ReactJS, Redux, HTML5, CSS3, Ruby, Ruby on Rails, Material UI, Bootstrap, PostgreSQL.
                <br />
                <b>IDE:</b> Microsoft VS Code
                <br />
                <b>VCS:</b> Git/Github
                <br />
                <b>PMS:</b> Trello
                <br />
                
                
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-6 ">
            <div className="box">
              <h5>Learning</h5>
              <p>
                <b>Currently:</b> NodeJS and ExpressJS, MongoDB
                <br /> <b>On the radar:</b> AWS
              </p>
            </div> */}

        <div className="col-lg-12  col-md-12 col-6">
          <div className="skillsBox">
            <img className="icon" src={Html} />
            <img className="icon" src={Css} />
            <img className="icon" src={Js} />
            <img className="icon" src={Ruby} />
            <img className="icon" src={Rails} />
            <img className="icon" src={Reactp} />
            <img className="icon" src={Redux} />
            <img className="icon" src={Node} />

            <img className="icon" src={Mongo} />
            <img className="icon" src={PG} />
            <img className="icon" src={Github} />

            <img className="icon" src={Git} />
            <img className="icon" src={Heroku} />
            <img className="icon" src={VS} />
          </div>
        </div>
      </div>
      <div />
    </section>
  );
};

export default AboutMe;
