import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withThemeConsumer } from 'contexts';
import styles from './styles.scss';

const Panel = ({ children, className, theme }) => (
  <div className={classNames(styles.panel, styles[theme], className)}>
    <div className={styles.content}>
      {children}
    </div>
  </div>
);

Panel.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  theme: PropTypes.string
};

export default withThemeConsumer(Panel);
