import React from 'react';
import PropTypes from 'prop-types';
import Link from 'components/link';
import styles from './styles.scss';

const Technology = ({ name, url }) => (
  <div className={styles.technology}>
    <Link href={url}>
      {name}
    </Link>
  </div>
);

Technology.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Technology;
