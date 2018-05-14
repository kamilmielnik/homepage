import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Slider from 'components/slider';
import { FONT_SIZE_MAX, FONT_SIZE_MIN, FONT_SIZE_STEP } from 'data';
import styles from './styles.scss';

const SelectFontSize = ({ className, value, onChange }) => (
  <div className={classNames(styles.selectFontSize, className)}>
    <div className={classNames(styles.label, styles.small)} style={{ fontSize: FONT_SIZE_MIN }}>
      A
    </div>

    <Slider
      min={FONT_SIZE_MIN}
      max={FONT_SIZE_MAX}
      step={FONT_SIZE_STEP}
      value={value}
      onChange={onChange} />

    <div className={classNames(styles.label, styles.large)} style={{ fontSize: FONT_SIZE_MAX }}>
      A
    </div>
  </div>
);

SelectFontSize.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SelectFontSize;
