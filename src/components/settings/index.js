import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from 'components/button';
import Gear from 'components/icons/gear';
import SelectFontSize from 'components/select-font-size';
import SelectTheme from 'components/select-theme';
import styles from './styles.scss';

class Settings extends Component {
  static propTypes = {
    className: PropTypes.string,
    fontSize: PropTypes.number.isRequired,
    theme: PropTypes.string.isRequired,
    onFontSizeChange: PropTypes.func.isRequired,
    onThemeChange: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  onButtonClick = (event) => {
    event.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { className, fontSize, theme, onFontSizeChange, onThemeChange } = this.props;
    const { isOpen } = this.state;

    return (
      <div className={classNames(styles.settings, className)}>
        {isOpen && (
          <React.Fragment>
            <SelectFontSize className={styles.selectFontSize} value={fontSize} onChange={onFontSizeChange} />
            <SelectTheme className={styles.selectTheme} value={theme} onChange={onThemeChange} />
          </React.Fragment>
        )}

        <Button className={styles.button} pressed={isOpen} onClick={this.onButtonClick}>
          <Gear />
        </Button>
      </div>
    );
  }
}

export default Settings;
