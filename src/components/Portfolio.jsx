// src/components/Portfolio.jsx
import React, { Component } from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import projects from '../data/projects';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFilter: 'All',
      projects,
    };
  }

  handleFilterChange = (filter) => {
    this.setState({ selectedFilter: filter });
  };

  getUniqueFilters = () => {
    const categories = new Set(['All']);
    this.state.projects.forEach((project) => categories.add(project.category));
    return Array.from(categories);
  };

  getFilteredProjects = () => {
    const { selectedFilter } = this.state;
    return selectedFilter === 'All'
      ? this.state.projects
      : this.state.projects.filter((p) => p.category === selectedFilter);
  };

  render() {
    const filters = this.getUniqueFilters();
    const filteredProjects = this.getFilteredProjects();

    return (
      <div>
        <Toolbar
          filters={filters}
          selected={this.state.selectedFilter}
          onSelectFilter={this.handleFilterChange}
        />
        <ProjectList projects={filteredProjects} />
      </div>
    );
  }
}

export default Portfolio;
