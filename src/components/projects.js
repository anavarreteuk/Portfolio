import React, { Component } from "react";
import Img from "gatsby-image";

import "./projects.css";
import projectList from "../data/projects.json";

class Projects extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const projectImgs = this.props.projectImgs;
    return (
      <section id="projects" className="section projects">
        <h2 className="text-center">PROJECTS</h2>
        <div className="section-content">
          <div className="subheader" />
          <div className="project-list">
            {projectList.map(project => {
              const image = projectImgs.find(n => {
                return n.node.relativePath === `projects/${project.img}`;
              });
              const imageSizes = image.node.childImageSharp.sizes;
              return <div key={project.name} className="single-card" target="_blank" rel="noopener noreferrer">
                  <div className="card-img">
                  <a href="https://www.fxtrader.adrian-navarrete.com">
                      <Img title={project.name} alt="Screenshot of Project" sizes={imageSizes} className="card-img_src center-block" />
                    </a>
                  </div>
                  <div className="blue-divider" />
                  <div className="card-info">
                    <h4 className="card-name">{project.name}</h4>
                    <p>{project.description}</p>
                    <div className="link-container">
                      {
                        //  <a href={project.youtube} target="_blank" rel="noopener noreferrer">Demo</a>
                      }
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        Code
                      </a>
                      {<a href={project.youtube} target="_blank" rel="noopener noreferrer">
                          Presentation
                        </a>}
                    </div>
                  </div>
                </div>;
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
