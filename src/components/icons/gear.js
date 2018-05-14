import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.scss';

const Gear = ({ className, height = 20, width = 20, ...props }) => (
  <svg
    className={classNames(styles.icon, className)}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="340 140 280 280"
    width={width}
    height={height}
    {...props}>
    <path
      strokeLinecap="round"
      strokeWidth="0"
      d="M620,305.666v-51.333l-31.5-5.25c-2.333-8.75-5.833-16.917-9.917-23.917L597.25,199.5l-36.167-36.75l-26.25,18.083c-7.583-4.083-15.75-7.583-23.916-9.917L505.667,140h-51.334l-5.25,31.5c-8.75,2.333-16.333,5.833-23.916,9.916L399.5,163.333L362.75,199.5l18.667,25.666c-4.083,7.584-7.583,15.75-9.917,24.5l-31.5,4.667v51.333l31.5,5.25c2.333,8.75,5.833,16.334,9.917,23.917l-18.667,26.25l36.167,36.167l26.25-18.667c7.583,4.083,15.75,7.583,24.5,9.917l5.25,30.916h51.333l5.25-31.5c8.167-2.333,16.333-5.833,23.917-9.916l26.25,18.666l36.166-36.166l-18.666-26.25c4.083-7.584,7.583-15.167,9.916-23.917L620,305.666z M480,333.666c-29.75,0-53.667-23.916-53.667-53.666s24.5-53.667,53.667-53.667S533.667,250.25,533.667,280S509.75,333.666,480,333.666z" />
  </svg>
);

Gear.propTypes = {
  className: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
};

export default Gear;
