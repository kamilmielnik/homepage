import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.scss';

const Theme = ({ className, value, onClick }) => (
  <div
    className={classNames(styles.theme, styles[value], className)}
    title="Change theme"
    onClick={() => onClick(value)} />
);

Theme.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Theme;
