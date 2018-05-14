import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withThemeConsumer } from 'contexts';
import styles from './styles.scss';

const Bullet = ({ className, theme, ...props }) => (
  <span className={classNames(styles.bullet, styles[theme], className)} {...props}>
    &bull;
  </span>
);

Bullet.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string
};

export default withThemeConsumer(Bullet);
