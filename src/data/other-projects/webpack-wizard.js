import React from 'react';
import { BABEL, EXPRESS, NODE, WEBPACK } from 'data';

export default {
  id: 'webpack-wizard',
  name: 'webpack-wizard',
  technologies: [ NODE, WEBPACK, BABEL, EXPRESS ],
  github: 'https://github.com/kamilmielnik/webpack-wizard',
  npm: 'https://www.npmjs.com/package/webpack-wizard',
  summary: (
    <p>
      Manages build & development processes configuration & dependencies.
    </p>
  ),
  description: (
    <React.Fragment>
      <p>
        There are some downsides when it comes to using webpack-wizard.
        You will have to remove 28 dev dependencies from your <code>package.json</code>.
        You will also have to delete those huge <code>webpack</code> configs.
        Oh yeah, and your <code>babel</code> config too.
        And <code>dev-server</code>, if you have one.
      </p>
      <p>
        That's the price you pay for a tool providing everything
        you need for <code>React</code> development.
        It even has a <code>react-redux</code> boilerplate.
      </p>
      <p>
        My every frontend project is built with it.
        I also did one <code>Electron</code> project with it.
      </p>
    </React.Fragment>
  )
};
