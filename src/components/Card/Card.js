import React from 'react';
import CardInfo from './CardInfo';
import styled from 'styled-components';

const Card = props => {
  // console.log(props.results);
  const CharacterStatus = styled.div``;

  return (
    <>
      {props.results?.map(character => {
        return (
          <div key={character.id}>
            <CharacterStatus>{character.status}</CharacterStatus>
            <img src={character.image} alt="" />
            <CardInfo character={character} />
          </div>
        );
      })}
    </>
  );
};

export default Card;
