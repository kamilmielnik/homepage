import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withThemeConsumer } from 'contexts';
import styles from './styles.scss';

const Link = ({ children, className, theme, ...props }) => (
  <a className={classNames(styles.link, styles[theme], className)} {...props}>
    {children}
  </a>
);

Link.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  theme: PropTypes.string
};

export default withThemeConsumer(Link);
