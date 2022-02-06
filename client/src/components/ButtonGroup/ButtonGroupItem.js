import React from 'react';
import styles from './ButtonGroup.module.sass';

function ButtonGroupItem (props) {
  const {
    id,
    content: { header, describe, isSelected },
    clickedButton
  } = props;

  const SelectButtonClass = () =>
    isSelected ? styles.clickedButtonItem : styles.NoClickedButtonItem;

  return (
    <div className={styles.buttonGroupItem}>
      <div
        key={id}
        className={`${SelectButtonClass()} ${styles.buttonItem}`}
        onClick={() => clickedButton(id)}
      >
        <div className={styles.headerBox}>
          <span className={styles.headerItem}>{header}</span>
        </div>
        <h5 className={styles.describeItem}>{describe}</h5>
      </div>
    </div>
  );
}

export default ButtonGroupItem;
