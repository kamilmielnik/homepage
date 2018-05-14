import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { email } from 'data';
import { withThemeConsumer } from 'contexts';
import Copyright from 'components/copyright';
import Link from 'components/link';
import styles from './styles.scss';

const Footer = ({ className, theme }) => (
  <footer className={classNames(styles.footer, styles[theme], className)}>
    <div className={styles.row}>
      Design & Development
    </div>

    <Copyright className={styles.row} />

    <div className={styles.row}>
      <Link className={styles.link} href={`mailto:${email}`}>{email}</Link>
    </div>
  </footer>
);

Footer.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string
};

export default withThemeConsumer(Footer);
