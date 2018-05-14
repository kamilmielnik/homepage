import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Project from './project';
import styles from './styles.scss';

const Projects = ({ className, projects = [] }) => (
  <div className={classNames(styles.projects, className)}>
    {projects.map((project, index) => (
      <Project key={index} {...project} />
    ))}
  </div>
);

Projects.propTypes = {
  className: PropTypes.string,
  projects: PropTypes.arrayOf(PropTypes.shape(Projects.propTypes))
};

export default Projects;
