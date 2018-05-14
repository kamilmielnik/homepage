import React from 'react';
import PropTypes from 'prop-types';
import Link from 'components/link';
import LabeledSection from 'components/labeled-section';
import styles from './styles.scss';

const LabeledLink = ({ label, url }) => (
  <LabeledSection className={styles.link} ellipsis={true} label={label}>
    <Link href={url}>
      {url}
    </Link>
  </LabeledSection>
);

LabeledLink.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default LabeledLink;
