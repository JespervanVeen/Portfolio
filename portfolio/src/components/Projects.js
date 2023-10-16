import React, { useState, useEffect } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch("../data.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setSelectedProject(data[0]);
      });
  }, []);

  const handleImage = (projectId) => {
    const project = projects.find((project) => project.id === projectId);
    setSelectedProject(project);
  };

  return (
    <div className="projects-content">
      <div className="project-title-div">
        <h1 id="projects-title">Projects</h1>
      </div>
      <div className="projects-main">
        <div className="projects-main-text">
          {selectedProject && (
            <div className="project-item">
              <h1 id="projects-text-title">{selectedProject.title}</h1>
              <h2 id="projects-text-desc">{selectedProject.desc}</h2>
              <h2 id="projects-text-year">{selectedProject.year}</h2>
              <div className="langdiv">
                <img class="lang-icon" src={selectedProject.language1} alt=""></img>
                <img class="lang-icon" src={selectedProject.language2} alt=""></img>
                <img class="lang-icon" src={selectedProject.language3} alt=""></img>
              </div>
            </div>
          )}
        </div>
        <div className="projects-main-images">
          {projects.map((project) => (
            <img
              key={project.id}
              src={process.env.PUBLIC_URL + "/" + project.img}
              alt=""
              className="projects-image"
              onClick={() => handleImage(project.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
