// src/components/ProjectList.jsx
import React from 'react';
import './../ProjectList.css';

const ProjectList = ({ projects }) => (
  <div className="project-list">
    {projects.map((project, index) => (
      <div key={index} className="project-card">
        <img src={project.img} alt={`Project ${index + 1}`} />
      </div>
    ))}
  </div>
);

export default ProjectList;
