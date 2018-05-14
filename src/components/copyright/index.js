import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { homepageUrl } from 'data';
import Link from 'components/link';
import styles from './styles.scss';

const getCurrentYear = () => new Date().getFullYear();

const Copyright = ({ className }) => (
  <div className={classNames(styles.copyright, className)}>
    Copyright © {getCurrentYear()}
    &nbsp;
    <Link className={styles.link} href={homepageUrl}>
      Kamil Mielnik
    </Link>
  </div>
);

Copyright.propTypes = {
  className: PropTypes.string
};

export default Copyright;
