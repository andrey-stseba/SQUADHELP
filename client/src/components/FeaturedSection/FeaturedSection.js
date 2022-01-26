import React from 'react';
import ClientItem from './ClientItem';
import styles from './FeaturedSection.module.sass';

function FeaturedSection () {
  return (
    <section className={styles.featuredSection}>
      <h6>Featured In</h6>
      <div className={styles.clientsBox}>
        <ClientItem
          path={['forbes.svg']}
          pathLink='http://www.forbes.com/sites/forbestreptalks/2016/07/11/not-sure-how-to-name-a-startup-squadhelp-will-crowdsource-it-for-199'
        />
        <ClientItem
          path={['TNW.svg']}
          pathLink='http://thenextweb.com/contributors/crowdsource-startup-name-with-squadhelp/'
        />
        <ClientItem
          path={['chicago.svg']}
          pathLink='http://www.chicagotribune.com/bluesky/originals/ct-squadhelp-startup-names-bsi-20170331-story.html'
        />
        <ClientItem
          path={['Mashable.svg']}
          pathLink='http://mashable.com/2011/04/01/make-money-crowdworking/'
        />
      </div>
    </section>
  );
}

export default FeaturedSection;
