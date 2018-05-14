import React from 'react';
import { MOBX, REACT, SCSS, WEBPACK_WIZARD } from 'data';
import Link from 'components/link';

export default {
  id: 'sprouts',
  name: 'Sprouts',
  technologies: [ REACT, MOBX, SCSS, WEBPACK_WIZARD ],
  github: 'https://github.com/kamilmielnik/sprouts',
  www: 'http://sprouts.kamilmielnik.com',
  summary: (
    <p>
      <Link href="https://en.wikipedia.org/wiki/Sprouts_(game)">Sprouts</Link> paper-and-pencil game
      in your browser.
    </p>
  ),
  description: (
    <React.Fragment>
      <p>
        Just playing around with <code>MobX</code> and sharing the results.
      </p>
    </React.Fragment>
  )
};
