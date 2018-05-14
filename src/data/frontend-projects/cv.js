import React from 'react';
import { REACT, SCSS, WEBPACK_WIZARD } from 'data';

export default {
  id: 'cv',
  name: 'CV',
  technologies: [ REACT, SCSS, WEBPACK_WIZARD ],
  github: 'https://github.com/kamilmielnik/cv',
  www: 'http://cv.kamilmielnik.com',
  summary: (
    <p>
      My curriculum vitae made with <code>React</code>.
    </p>
  ),
  description: (
    <p>
      I find it a little easier to maintain than a <code>LaTeX</code> or
      a <code>Microsoft Word</code> document. It's also printable in <code>A4</code> format.
    </p>
  )
};
