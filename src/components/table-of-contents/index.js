import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withThemeConsumer } from 'contexts';
import Link from 'components/link';
import styles from './styles.scss';

const NAVIGATION_HEIGHT = 63;
const PADDING_LARGE = 50;

const createHandler = (id) => (event) => {
  event.preventDefault();
  const element = document.getElementById(id);
  const { y } = element.getBoundingClientRect();
  window.scrollBy(0, y - (NAVIGATION_HEIGHT + PADDING_LARGE));
};

const TableOfContents = ({ className, contents = [], theme }) => (
  <div className={classNames(styles.tableOfContents, styles[theme], className)}>
    {contents.map(({ id, name }) => (
      <div key={id} className={styles.entry}>
        <Link href={`#${id}`} onClick={createHandler(id)}>
          {name}
        </Link>
      </div>
    ))}
  </div>
);

TableOfContents.propTypes = {
  className: PropTypes.string,
  contents: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })),
  theme: PropTypes.string
};

export default withThemeConsumer(TableOfContents);
