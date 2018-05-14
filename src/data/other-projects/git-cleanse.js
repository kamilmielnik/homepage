import React from 'react';
import { NODE } from 'data';

export default {
  id: 'git-cleanse',
  name: 'git-cleanse',
  technologies: [ NODE ],
  github: 'https://github.com/kamilmielnik/git-cleanse',
  npm: 'https://www.npmjs.com/package/git-cleanse',
  summary: (
    <p>
      Cleanse your repository directory from leftover files.
    </p>
  ),
  description: (
    <p>
      This command line tool will recursively remove all empty files
      (except <code>.gitkeep</code>, <code>.hgkeep</code> & <code>.keep</code>)
      and empty directories
      (except <code>.git</code>, <code>.hg</code>, <code>.svn</code> & <code>node_modules</code>)
      from your file system, starting from your current working directory.
    </p>
  )
};
