import React, { useState, useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("../data.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  return (
    <div className="projects-content">
      <div className="project-title-div">
        <h1 id="projects-title">Projects</h1>
      </div>
      <div className="projects-main">
        <Parallax pages={3}>
          <ParallaxLayer sticky={{ start: 0, end: 3 }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <img id="projects-img" src="" alt="No img found"></img>
          </ParallaxLayer>

        {projects.map((project) => (
          <ParallaxLayer key={project.id} offset={project.offset} speed={0.5} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
            <div className="item">
              <h1>{project.title}</h1>
              <h2>{project.desc}</h2>
              <h1>{project.year}</h1>
            </div>
          </ParallaxLayer>
        ))}
        </Parallax>
      </div>
    </div>
  );
};

export default Projects;
