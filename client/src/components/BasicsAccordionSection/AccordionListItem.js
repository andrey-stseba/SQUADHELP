import React, { useState } from 'react';
import styles from './BasicsAccordionSection.module.sass';

function AccordionListItem ({ title, content }) {
  const [isActive, setIsActive] = useState(false);
  const boxShadowNone = isActive ? { boxShadow: 'none' } : null;
  const onclick = () => setIsActive(!isActive);

  return (
    <div className={styles.accordionItem} style={boxShadowNone}>
      <li className={styles.accordionTitle} onClick={onclick}>
        <div>{title}</div>
        <div>
          {isActive ? (
            <i class='fas fa-arrow-down small'></i>
          ) : (
            <i class='fas fa-arrow-right small'></i>
          )}
        </div>
      </li>
      {isActive && <p className={styles.accordionContent}>{content}</p>}
    </div>
  );
}

export default AccordionListItem;
