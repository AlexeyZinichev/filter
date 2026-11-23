// src/components/Toolbar.jsx
import React from 'react';
import './Toolbar.css';

const Toolbar = ({ filters, selected, onSelectFilter }) => (
  <div className="toolbar">
    {filters.map((filter) => (
      <button
        key={filter}
        className={filter === selected ? 'active' : ''}
        onClick={() => onSelectFilter(filter)}
      >
        {filter}
      </button>
    ))}
  </div>
);

export default Toolbar;
