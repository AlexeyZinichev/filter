import { Component } from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import { projectsData } from '../data';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    // Получаем уникальные категории из данных
    const categories = ['All', ...new Set(projectsData.map(p => p.category))];
    
    this.state = {
      projects: projectsData,
      filters: categories,
      selectedFilter: 'All'
    };
  }

  handleFilterChange = (filter) => {
    this.setState({ selectedFilter: filter });
  };

  render() {
    const { filters, selectedFilter, projects } = this.state;

    // Фильтрация списка проектов
    let filteredProjects = projects;
    if (selectedFilter !== 'All') {
      filteredProjects = projects.filter(p => p.category === selectedFilter);
    }

    return (
      <div className="portfolio-container">
        <Toolbar
          filters={filters}
          selected={selectedFilter}
          onSelectFilter={this.handleFilterChange}
        />
        <ProjectList projects={filteredProjects} />
      </div>
    );
  }
}

export default Portfolio;