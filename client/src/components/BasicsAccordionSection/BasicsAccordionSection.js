import React from 'react';
import AccordionList from './AccordionList';
import CONSTANTS from './../../constants';
import styles from './BasicsAccordionSection.module.sass';

function BasicsAccordionSection () {
  return (
    <div className={styles.basicsAccordionSection}>
      <nav className={styles.navList}>
        <ul>
          <li>
            <a href='#contests'>Launching A Contest</a>
          </li>
          <li>
            <a href='#marketplace'>Buying From Marketplace</a>
          </li>
          <li>
            <a href='#managed'>Managed Contests</a>
          </li>
          <li>
            <a href='#creatives'>For Creatives</a>
          </li>
        </ul>
      </nav>
      <div className={styles.accordionLists}>
        <AccordionList
          id='contests'
          data={CONSTANTS.contestsData}
          header='Launching A Contest'
        />
        <AccordionList
          id='marketplace'
          data={CONSTANTS.marketplaceData}
          header='Buying From Marketplace'
        />
        <AccordionList
          id='managed'
          data={CONSTANTS.managedData}
          header='Managed Contests'
        />
        <AccordionList
          id='creatives'
          data={CONSTANTS.creativesData}
          header='For Creatives'
        />
      </div>
    </div>
  );
}

export default BasicsAccordionSection;
