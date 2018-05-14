import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from 'components/link';
import styles from './styles.scss';

class ShowMore extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  onLinkClick = (event) => {
    event.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { children, className } = this.props;
    const { isOpen } = this.state;

    return (
      <div className={classNames(styles.showMore, { [styles.open]: isOpen }, className)}>
        <div className={styles.buttonContainer}>
          <Link href="#" onClick={this.onLinkClick}>
            {isOpen ? 'Hide' : 'Learn more...'}
          </Link>
        </div>

        <div className={styles.content}>
          {isOpen && children}
        </div>
      </div>
    );
  }
}

export default ShowMore;
