import React from 'react';

function listItem (props) {
  const { number, describe } = props;
  return (
    <li>
      <span>{number}</span>
      <p>{describe}</p>
    </li>
  );
}

export default listItem;
