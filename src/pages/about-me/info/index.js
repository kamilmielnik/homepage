import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { email, cvUrl, imageUrl } from 'data';
import { withThemeConsumer } from 'contexts';
import Link from 'components/link';
import Panel from 'components/panel';
import styles from './styles.scss';

const Info = ({ className, theme }) => (
  <Panel className={classNames(styles.info, styles[theme], className)}>
    <div className={styles.image}>
      <img src={imageUrl} />
    </div>

    <div className={styles.content}>
      <h1 className={styles.title}>
        Kamil Mielnik
      </h1>

      <h2 className={styles.subtitle}>
        JavaScript Developer
      </h2>

      <p className={styles.description}>
        I am a frontend developer. I specialize in <code>React</code> technology stack.
      </p>

      <p className={styles.description}>
        Among others, I have worked on fintech
        applications, <span className={styles.noBreak}>e-commerce</span> platforms & field
        service hybrid mobile applications.
        I also have some non-production experience with <code>node.js</code>.
      </p>

      <p className={styles.description}>
        I have over 6 years of experience as a professional software developer.
        I was a leader of a small frontend team
        at <Link href="https://codete.com/">Codete</Link> for slightly over 1.5 year.
      </p>

      <p className={styles.description}>
        If you're looking for a remote frontend developer be sure to check out
        my <Link href={cvUrl}>CV</Link> and drop
        me <span className={styles.noBreak}>an <Link href={`mailto:${email}`}>e-mail</Link></span>.
      </p>
    </div>
  </Panel>
);

Info.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string
};

export default withThemeConsumer(Info);
