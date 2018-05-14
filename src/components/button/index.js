import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withThemeConsumer } from 'contexts';
import styles from './styles.scss';

const Button = ({ children, className, pressed, theme, ...props }) => (
  <div
    className={classNames(
      styles.button,
      styles[theme],
      className,
      {
        [styles.pressed]: pressed
      }
    )}
    {...props}>
    {children}
  </div>
);

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  pressed: PropTypes.bool,
  theme: PropTypes.string
};

export default withThemeConsumer(Button);
