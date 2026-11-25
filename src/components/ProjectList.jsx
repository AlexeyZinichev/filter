import './ProjectList.css';

const ProjectList = ({ projects }) => {
  if (projects.length === 0) {
    return <p>Нет проектов в этой категории.</p>;
  }

  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.img} alt={`Проект ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ProjectList;