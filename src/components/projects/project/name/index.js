import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withThemeConsumer } from 'contexts';
import LabeledSection from 'components/labeled-section';
import Link from 'components/link';
import styles from './styles.scss';

const Name = ({ github, id, name, npm, theme, www }) => (
  <LabeledSection
    className={classNames(styles.section, styles[theme])}
    labelClassName={styles.label}
    label="name">
    <Link className={styles.name} href={www || npm || github || '#'} id={id}>
      {name}
    </Link>
  </LabeledSection>
);

Name.propTypes = {
  github: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  npm: PropTypes.string,
  theme: PropTypes.string,
  www: PropTypes.string
};

export default withThemeConsumer(Name);
