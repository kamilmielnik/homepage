import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import { FONT_SIZE_DEFAULT, THEME_DEFAULT, frontendProjects, otherProjects } from 'data';
import { ThemeContext } from 'contexts';
import Footer from 'components/footer';
import Navigation from 'components/navigation';
import ScrollTop from 'components/scroll-top';
import Settings from 'components/settings';
import TableOfContents from 'components/table-of-contents';
import AboutMe from 'about-me';
import NotFound from 'not-found';
import FrontendProjects from 'frontend-projects';
import OtherProjects from 'other-projects';
import styles from './styles.scss';

const tableOfContentsPerRoute = {
  '/frontend-projects': frontendProjects,
  '/other-projects': otherProjects,
  '/about-me': []
};

class App extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      fontSize: FONT_SIZE_DEFAULT,
      theme: THEME_DEFAULT
    };
  }

  onFontSizeChange = (fontSize) => {
    this.setState({ fontSize });
    document.documentElement.style.fontSize = `${fontSize}px`;
  };

  onThemeChange = (theme) => this.setState({ theme });

  render() {
    const { location } = this.props;
    const { fontSize, theme } = this.state;

    return (
      <ThemeContext.Provider value={theme}>
        <ScrollTop>
          <DocumentTitle title="Kamil Mielnik - Home Page">
            <div className={classNames(styles.app, styles[theme])}>
              <Navigation className={styles.navigation} />

              <div className={styles.content}>
                <div className={styles.tableOfContentsContainer}>
                  <TableOfContents
                    className={styles.tableOfContents}
                    contents={tableOfContentsPerRoute[location.pathname]} />
                </div>

                <Settings
                  className={styles.settings}
                  fontSize={fontSize}
                  theme={theme}
                  onFontSizeChange={this.onFontSizeChange}
                  onThemeChange={this.onThemeChange} />

                <Switch>
                  <Redirect exact={true} from="/" to="/about-me" />
                  <Route exact={true} path="/about-me" component={AboutMe} />
                  <Route exact={true} path="/frontend-projects" component={FrontendProjects} />
                  <Route exact={true} path="/other-projects" component={OtherProjects} />
                  <Route exact={true} path="/404" component={NotFound} />
                  <Route component={NotFound} />
                </Switch>
              </div>

              <Footer className={styles.footer} />
            </div>
          </DocumentTitle>
        </ScrollTop>
      </ThemeContext.Provider>
    );
  }
}

export default withRouter(App);
