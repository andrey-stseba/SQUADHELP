import React from 'react';
import styles from './CTASection.module.sass';
import CONSTANTS from './../../constants';

function CTASection () {
  return (
    <section className={styles.sectionContainer}>
      <h3>Ready to get started?</h3>
      <p>
        Fill out your contest brief and begin receiving custom name suggestions
        within minutes.
      </p>

      <a className={styles.startContestBtn} href='#'>
        Start A Contest
      </a>
      <img
        className={styles.leftImage}
        src={`${CONSTANTS.STATIC_IMAGES_PATH}imageLeft.svg`}
        alt='imageLeft'
      />
      <img
        className={styles.rightImage}
        src={`${CONSTANTS.STATIC_IMAGES_PATH}imageRight.svg`}
        alt='imageRight'
      />
    </section>
  );
}

export default CTASection;
