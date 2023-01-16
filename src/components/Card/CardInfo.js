import React from 'react';

const CardInfo = props => {
  return (
    <div>
      <div>{props.character.name}</div>
      <div>
        <div>Last location:</div>
        <div>{props.character.location.name}</div>
      </div>
    </div>
  );
};

export default CardInfo;
