import React from 'react';
import CONSTANS from './../../constants';
import styles from './StatsSection.module.sass';

function StatsSection () {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.boxCard}>
        <img src={`${CONSTANS.STATIC_IMAGES_PATH}five-stars.svg`} alt='Image' />
        <p>
          <span>4.9 out of 5 stars</span> from 25,000+ customers.
        </p>
      </div>
      <div className={styles.boxCard}>
        <img src={`${CONSTANS.STATIC_IMAGES_PATH}four-foto.png`} alt='Image' />
        <p>
          Our branding community stands <span>200,000+</span> strong.
        </p>
      </div>
      <div className={styles.boxCard}>
        <img src={`${CONSTANS.STATIC_IMAGES_PATH}icon-list.svg`} alt='Image' />
        <p>
          <span>140+ Industries</span> supported across more than
          <span> 85 countries</span> – and counting.
        </p>
      </div>
    </section>
  );
}

export default StatsSection;
