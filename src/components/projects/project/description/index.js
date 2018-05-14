import React from 'react';
import PropTypes from 'prop-types';
import LabeledSection from 'components/labeled-section';
import styles from './styles.scss';

const Description = ({ description }) => (
  <LabeledSection className={styles.section} label="description">
    <div className={styles.description}>
      {description}
    </div>
  </LabeledSection>
);

Description.propTypes = {
  description: PropTypes.node
};

export default Description;
