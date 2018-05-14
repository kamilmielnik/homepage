import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withThemeConsumer } from 'contexts';
import styles from './styles.scss';

const LabeledSection = ({ children, className, ellipsis, label, labelClassName, theme }) => (
  <div className={classNames(styles.labeledSection, styles[theme], className)}>
    <div className={classNames(styles.label, labelClassName)}>
      {label}
    </div>
    <div className={classNames(styles.content, { [styles.ellipsis]: ellipsis })}>
      {children}
    </div>
  </div>
);

LabeledSection.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  ellipsis: PropTypes.bool,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  theme: PropTypes.string
};

export default withThemeConsumer(LabeledSection);
