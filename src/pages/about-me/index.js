import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Info from './info';
import Links from './links';
import styles from './styles.scss';

const AboutMe = ({ className }) => (
  <div className={classNames(styles.aboutMe, className)}>
    <Info className={styles.panel} />
    <Links className={styles.panel} />
  </div>
);

AboutMe.propTypes = {
  className: PropTypes.string
};

export default AboutMe;
