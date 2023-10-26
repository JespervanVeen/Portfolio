import React, { useState, useEffect, useRef, forwardRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Slide from "./Slide";
import 'bootstrap/dist/css/bootstrap.min.css';


const Projects = forwardRef((props, ref) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("../data.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  return (
    <div ref={ref} className="projects-content">
      <div className="project-title-div">
        <h1 id="projects-title">Projects</h1>
      </div>
      <div className="projects-main">
        <Parallax id="par" style={{overflow: 'scroll'}} pages={2}>
          <ParallaxLayer sticky={{ start: 0, end: 2 }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <Slide />
          </ParallaxLayer>

        {projects.map((project) => (
          <ParallaxLayer key={project.id} offset={project.offset} speed={0.5} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
            <div className="item">
              <h1>{project.title}</h1>
              <h2>{project.desc}</h2>
              <h3>{project.year}</h3>
              <div className="lang">
                <img className="item-lang" src={project.language1} alt=""></img>
                <img className="item-lang" src={project.language2}></img>
                <img className="item-lang" src={project.language3}></img>
              </div>
            </div>
          </ParallaxLayer>
        ))}
        </Parallax>
      </div>
    </div>
  );
});

export default Projects;
