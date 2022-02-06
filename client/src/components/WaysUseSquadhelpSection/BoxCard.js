import React from 'react';
import CONSTANS from '../../constants';
import styles from './WaysUseSquadhelpSection.module.sass';

function BoxCard (props) {
  const defaultPathToImages = `${CONSTANS.STATIC_IMAGES_PATH}boxCardLabels/`;

  const renderImage = () => {
    const array = [];
    for (let i = 0; i < props.path.length; i++) {
      array.push(
        <img
          src={defaultPathToImages + props.path[i]}
          key={i}
          alt={props.path[i].replace(/.png/g, 'Image')}
        />
      );
    }
    return array;
  };

  const { header, describe } = props;
  return (
    <div id={header} className={styles.cardBox}>
      <div>{renderImage()}</div>
      <h3>{header}</h3>
      <p>{describe}</p>
      <a href='https://vimeo.com/368584367' target='_blank'>
        {header}
      </a>
    </div>
  );
}

export default BoxCard;
