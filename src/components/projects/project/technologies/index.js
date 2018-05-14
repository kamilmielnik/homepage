import React from 'react';
import PropTypes from 'prop-types';
import Bullet from 'components/bullet';
import LabeledSection from 'components/labeled-section';
import Separate from 'components/separate';
import Technology from './technology';
import styles from './styles.scss';

const Technologies = ({ technologies }) => (
  <LabeledSection className={styles.section} label="technologies">
    <div className={styles.technologies}>
      <Separate with={Bullet}>
        {technologies.map((technology, index) => (
          <Technology key={index} {...technology} />
        ))}
      </Separate>
    </div>
  </LabeledSection>
);

Technologies.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }))
};

export default Technologies;
