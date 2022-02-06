import React from 'react';
import CONSTANS from '../../constants';
import styles from './SquadhelpWorkSection.module.sass';

function SquadhelpWorkSection () {
  return (
    <section className={styles.SquadhelpWorkSection}>
      <div className={styles.textContainer}>
        <span>World's #1 Naming Platform</span>
        <h1>How Does Squadhelp Work?</h1>
        <p>
          Squadhelp helps you come up with a great name for your business by
          combining the power of crowdsourcing with sophisticated technology and
          Agency-level validation services.
        </p>
        <a href='https://vimeo.com/368584367' target='_blank'>
          <i className={'fas fa-play'}></i> Play Video
        </a>
      </div>

      <div className={styles.imageContainer}>
        <img
          src={`${CONSTANS.STATIC_IMAGES_PATH}phone-and-flower.png`}
          alt='phone-and-flower'
        />
      </div>
    </section>
  );
}

export default SquadhelpWorkSection;
