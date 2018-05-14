import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { THEMES } from 'data';
import { withThemeConsumer } from 'contexts';
import Theme from './theme';
import styles from './styles.scss';

const SelectTheme = ({ className, value, onChange }) => (
  <div className={classNames(styles.selectTheme, className)}>
    {THEMES.filter((option) => option !== value).map((option) => (
      <Theme
        key={option}
        className={styles.theme}
        value={option}
        onClick={onChange} />
    ))}
  </div>
);

SelectTheme.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default withThemeConsumer(SelectTheme);
