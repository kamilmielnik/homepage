import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { withThemeConsumer } from 'contexts';
import styles from './styles.scss';

const links = [
  { label: 'About me', to: '/about-me' },
  { label: 'Frontend projects', to: '/frontend-projects' },
  { label: 'Other projects', to: '/other-projects' }
];

const Navigation = ({ className, theme }) => (
  <nav className={classNames(styles.navigation, styles[theme], className)}>
    <div className={styles.filler} />

    <div className={styles.links}>
      <h1 className={styles.name}>
        Kamil Mielnik
      </h1>

      {links.map(({ label, to }, index) => (
        <NavLink key={index} activeClassName={styles.selected} className={styles.button} to={to}>
          {label}
        </NavLink>
      ))}
    </div>

    <div className={styles.filler} />
  </nav>
);

Navigation.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string
};

export default withThemeConsumer(Navigation);
