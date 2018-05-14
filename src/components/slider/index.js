import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import RcSlider from 'rc-slider';
import { withThemeConsumer } from 'contexts';
import styles from './styles.scss';

const RcSliderComponent = process.env.NODE_ENV === 'production' ? RcSlider : RcSlider.default;

const Slider = ({ className, theme, ...props }) => (
  <RcSliderComponent
    className={classNames(styles.slider, styles[theme], className)}
    {...props} />
);

Slider.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string
};

export default withThemeConsumer(Slider);
