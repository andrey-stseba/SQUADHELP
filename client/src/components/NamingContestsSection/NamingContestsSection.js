import React from 'react';
import ListItem from './ListItem';
import CONSTANTS from './../../constants';
import styles from './NamingContestsSection.module.sass';

function NamingContestsSection () {
  return (
    <section className={styles.namingContestsSection}>
      <div className={styles.headerContainer}>
        <img src={`${CONSTANTS.STATIC_IMAGES_PATH}cup.png`} />
        <h2>How Do Naming Contests Work?</h2>
      </div>
      <div className={styles.listContainer}>
        <ul className={styles.listItems}>
          <ListItem
            number='1.'
            describe='Fill out your Naming Brief and begin receiving name ideas in
              minutes.'
          />
          <ListItem
            number='2.'
            describe='Rate the submissions and provide feedback to creatives. Creatives
            submit even more names based on your feedback.'
          />
          <ListItem
            number='3.'
            describe='Our team helps you test your favorite names with your target
            audience. We also assist with Trademark screening.'
          />
          <ListItem
            number='4.'
            describe='Pick a Winner. The winner gets paid for their submission.'
          />
        </ul>
        <div className={styles.imageContainer}>
          <img src={`${CONSTANTS.STATIC_IMAGES_PATH}man-and-table.png`} />
        </div>
      </div>
    </section>
  );
}

export default NamingContestsSection;
