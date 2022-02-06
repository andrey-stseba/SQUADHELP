import React, { useState } from 'react';
import styles from './ButtonGroup.module.sass';
import ButtonGroupItem from './ButtonGroupItem';
import CONSTANS from './../../constants';

function ButtonGroup () {
  const [OnClickButton, setOnClickButton] = useState(
    CONSTANS.BUTTON_GROUP_ITEMS
  );
  const clickedButton = id => {
    setOnClickButton(
      OnClickButton.map((e, i) => {
        i === id ? (e.isSelected = true) : (e.isSelected = false);
        return e;
      })
    );
  };

  return (
    <section className={styles.baseButtonGroup}>
      {OnClickButton.map((e, i) => (
        <ButtonGroupItem content={e} id={i} clickedButton={clickedButton} />
      ))}
    </section>
  );
}

export default ButtonGroup;
