import React from 'react';
import PropTypes from 'prop-types';
import CONSTANTS from '../../constants';

const Telefon = ({ ...props }) => (
  <a
    style={{ textDecoration: 'none' }}
    href={`tel:${CONSTANTS.CONTACTS.CODE_OPERATOR}${CONSTANTS.CONTACTS.TEL}`}
  >
    <img {...props} />
    <span
      {...props}
    >{`(${CONSTANTS.CONTACTS.CODE_OPERATOR}) ${CONSTANTS.CONTACTS.TEL}`}</span>
  </a>
);

Telefon.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string
};

export default Telefon;
