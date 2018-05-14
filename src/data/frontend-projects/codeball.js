import React from 'react';
import { REACT, REDUX, SCSS, WEBPACK_WIZARD } from 'data';
import Link from 'components/link';

export default {
  id: 'codeball',
  name: 'Codeball',
  technologies: [ REACT, REDUX, SCSS, WEBPACK_WIZARD ],
  github: 'https://github.com/codeball-team/codeball-frontend',
  www: 'http://codeball.kamilmielnik.com',
  summary: (
    <p>
      App that handles sports events scheduling & enrollment.
    </p>
  ),
  description: (
    <React.Fragment>
      <p>
        When I worked at Codete, we used to play football every week. But not everyone could
        make it every time, so we used to use <Link href="https://doodle.com">doodle.com</Link> to
        handle the enrollment. But it was not convenient enough.
      </p>
      <p>
        There were at least 2 guys not happy with it, so they decided to create an app just for that.
        The idea was simple: allow a user to mark their availability for the next game with a single click.
      </p>
      <p>
        Me & Michał Marciniec have teamed up against the challenge. I did the the frontend, he did
        the backend. I heard through the grapevine that the app is still used at Codete to this day.
      </p>
    </React.Fragment>
  )
};
