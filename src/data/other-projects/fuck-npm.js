import React from 'react';
import { NODE } from 'data';
import Link from 'components/link';

export default {
  id: 'fuck-npm',
  name: 'fuck-npm',
  technologies: [ NODE ],
  github: 'https://github.com/kamilmielnik/fuck-npm',
  npm: 'https://www.npmjs.com/package/fuck-npm',
  summary: (
    <p>
      This command line tool will remove <code>node_modules</code> directory & run <code>npm install</code>.
    </p>
  ),
  description: (
    <p>
      The name is a coincidence, man
      <Link href="https://www.youtube.com/watch?v=5K_v8qQb3og&t=235">.</Link>
    </p>
  )
};
