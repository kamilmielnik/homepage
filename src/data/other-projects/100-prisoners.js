import React from 'react';
import { NODE } from 'data';
import Link from 'components/link';

const sourceUrl = 'https://www.ocf.berkeley.edu/~wwu/riddles/hard.shtml#100prisonersLightBulb';

export default {
  id: '100-prisoners',
  name: '100-prisoners',
  technologies: [ NODE ],
  github: 'https://github.com/kamilmielnik/100-prisoners',
  npm: 'https://www.npmjs.com/package/100-prisoners',
  summary: (
    <p>
      100 Prisoners and a Light Bulb riddle framework.
    </p>
  ),
  description: (
    <React.Fragment>
      <p>
        This package implements a framework able to run & test 100 Prisoners and a Light Bulb
        riddle solutions.
      </p>
      <p>
        I got to know the riddle from
        William Wu's <Link href={sourceUrl}>website</Link>.
      </p>
    </React.Fragment>
  )
};
