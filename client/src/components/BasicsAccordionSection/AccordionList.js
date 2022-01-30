import React from 'react';
import AccordionListItem from './AccordionListItem';

import styles from './BasicsAccordionSection.module.sass';

function AccordionList (props) {
  const { data, header, id } = props;
  return (
    <div id={id} className={styles.accordionList}>
      <h3>{header}</h3>
      <ul className={styles.accordion}>
        {data.map(({ title, content }, index) => (
          <AccordionListItem key={index} title={title} content={content} />
        ))}
      </ul>
    </div>
  );
}

export default AccordionList;
