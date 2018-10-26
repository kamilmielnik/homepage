import React from 'react';
import { EXPRESS, JEST, NODE, REACT, REDUX, SCSS, WEBPACK_WIZARD } from 'data';
import Link from 'components/link';

export default {
  id: 'scrabble-solver',
  name: 'Scrabble Solver',
  technologies: [ REACT, REDUX, SCSS, JEST, NODE, EXPRESS, WEBPACK_WIZARD ],
  github: 'https://github.com/kamilmielnik/scrabble-solver',
  www: 'http://scrabble-solver.kamilmielnik.com',
  npm: 'https://www.npmjs.com/package/scrabble-solver',
  summary: (
    <p>
      The ultimate cheating app for Scrabble and Literaki.
    </p>
  ),
  description: (
    <React.Fragment>
      <p>
        My baby.
      </p>
      <p>
        Back in January 2012 I wrote 200 lines of <code>C++</code> code to load up a dictionary,
        store it in a <code>Trie</code> structure, read up to 7 letters from console input
        and traverse the <code>Trie</code> structure to find all the words
        that could be created from provided letters. I did it for 200 PLN (about 60 USD back then)
        and it was my first money earned by programming (wrongly assuming that beer is not a currency).
      </p>
      <p>
        I enjoyed working on it and wanted to enhance that with some visuals to take it to
        the next level. So I created a simple <code>Windows Forms</code> project in <code>C#</code>,
        added support for "blank" characters & displayed the results grouped by word length.
        And I left it there.
      </p>
      <p>
        Some time later I got familiar with <code>WPF</code> and somehow I got the idea it would
        be fun to enhance the <code>C#</code> solver with the game board display.
        This would provide solver with information which would allow to find the best possible
        action (without predicting future actions of course) in the game. So in September 2014
        I started working on a new <code>C# WPF</code> project, but I haven't got far with it.
      </p>
      <p>
        Seasons change, time passes by, as the weeks become the months become the years
        <Link href="http://southpark.cc.com/clips/103831/deep-coma">...</Link>
      </p>
      <p>
        After getting heavily experienced with <code>JavaScript</code>, I decided to tackle the
        challenge once again. I started a new project in February 2017. <code>React</code> on
        the front, <code>node.js</code> in the back. On September 13th 2017, five and a half
        years since the beginning, <code>scrabble-solver@1.0.0</code> was released.
        And I saw it was good.
      </p>
      <p>
        My mind is at piece ever since. I don't even have nightmares anymore. Or dreams. Or goals.
      </p>
      <p>
        It's at <code>1.4.0</code> now. I have added <code>en-US</code> & <code>en-GB</code> locales
        support, a mini tutorial and kept the dependencies up to date
        (e.g. upgraded <code>React</code> from <code>15</code> to <code>16</code>).
      </p>
    </React.Fragment>
  )
};
