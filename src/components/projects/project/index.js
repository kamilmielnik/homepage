import React from 'react';
import PropTypes from 'prop-types';
import Panel from 'components/panel';
import ShowMore from 'components/show-more';
import Description from './description';
import LabeledLink from './labeled-link';
import Name from './name';
import Technologies from './technologies';
import styles from './styles.scss';

const Project = ({ description, github, id, name, npm, summary, technologies, www }) => (
  <Panel className={styles.project}>
    <Name github={github} id={id} name={name} npm={npm} www={www} />

    <Description description={summary} />

    {www && (
      <LabeledLink label="www" url={www} />
    )}

    {npm && (
      <LabeledLink label="npm" url={npm} />
    )}

    {github && (
      <LabeledLink label="github" url={github} />
    )}

    {technologies && technologies.length > 0 && (
      <Technologies technologies={technologies} />
    )}

    {description && (
      <ShowMore className={styles.showMore}>
        {description}
      </ShowMore>
    )}
  </Panel>
);

Project.propTypes = {
  description: PropTypes.node,
  github: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  npm: PropTypes.string,
  summary: PropTypes.node,
  technologies: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })),
  www: PropTypes.string
};

export default Project;
