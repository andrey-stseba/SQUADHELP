import React from 'react';
import styles from './WaysUseSquadhelpSection.module.sass';
import BoxCard from './BoxCard';

function WaysUseSquadhelpSection () {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.infoSection}>
        <span>Our Services</span>
        <h2>3 Ways To Use Squadhelp</h2>
        <p>
          Squadhelp offers 3 ways to get you a perfect name for your business.
        </p>
      </div>
      <div className={styles.cardsContainer}>
        <BoxCard
          path={['three-men.png']}
          header='Launch a Contest'
          describe='Work with hundreds of creative experts to get custom name
          suggestions for your business or brand. All names are auto-checked
          for URL availability.'
        />
        <BoxCard
          path={['monitor.png']}
          header='Explore Names For Sale'
          describe='Our branding team has curated thousands of pre-made names that you
          can purchase instantly. All names include a matching URL and a
          complimentary Logo Design'
        />
        <BoxCard
          path={['lamp-and-hand.png']}
          header='Agency-level Managed Contests'
          describe='Our Managed contests combine the power of 
          crowdsourcing with the rich experience of our branding consultants. 
          Get a complete agency-level experience at a fraction of Agency costs'
        />
      </div>
    </section>
  );
}

export default WaysUseSquadhelpSection;
