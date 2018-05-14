import React, { Children } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const Separate = ({ children, with: Component }) => {
  const childrenArray = Children.toArray(children);

  return childrenArray.reduce((nodes, node, index) => {
    nodes.push(node);
    if (index !== childrenArray.length - 1) {
      nodes.push(
        <Component
          key={childrenArray.length + nodes.length}
          className={styles.separator} />
      );
    }
    return nodes;
  }, []);
};

Separate.propTypes = {
  children: PropTypes.node,
  with: PropTypes.func
};

export default Separate;
