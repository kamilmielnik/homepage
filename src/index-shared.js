import 'rc-slider/assets/index.css';
import 'styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import { Router } from 'react-router';
import App from 'pages/app';

export default (Wrapper) => {
  const history = createHistory();
  const rootElement = document.getElementById('app');

  const render = (Component) => {
    const rendered = (
      <Router history={history}>
        <Component />
      </Router>
    );
    const wrapped = Wrapper ? <Wrapper>{rendered}</Wrapper> : rendered;
    ReactDOM.render(wrapped, rootElement);
  };

  if (module.hot) {
    module.hot.accept('pages/app', () => {
      const NextApp = require('pages/app').default;
      render(NextApp);
    });
  }

  render(App);
};
