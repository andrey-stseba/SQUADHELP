import React from 'react';
import CONSTANS from './../../constants';
import styles from './FeaturedSection.module.sass';

function ClientItem (props) {
  const defaultPathToImages = `${CONSTANS.STATIC_IMAGES_PATH}clientItemLabels/`;

  const renderImage = () => {
    const array = [];
    for (let i = 0; i < props.path.length; i++) {
      array.push(
        <img
          src={defaultPathToImages + props.path[i]}
          key={i}
          alt={props.path[i].replace(/.svg/g, 'Image')}
        />
      );
    }
    return array;
  };
  const { pathLink } = props;
  return (
    <div className={styles.clientItem}>
      <a href={pathLink} target='_blanke'>
        {renderImage()}
      </a>
    </div>
  );
}

export default ClientItem;
