import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  border-radius: 8px;
  border: 1px solid #ccc img {
    width: 50%;
    height: 100%;
  }
  .pad {
    padding: 10px;
  }
  .button {
    border-radius: 8px;
    background-color: ${(props) => (props.status ? '#83b695' : '#e1798f')};
    color: #fff;
    display: flex;
    justify-content: center;
  }
`;

const Card = (props) => {
  return (
    <Wrapper>
      <img src={props.image} alt='' />
      <div className='pad'>
        <h5>{props.name}</h5>
        <p>Género :{props.gender} </p>
        <p>Origen: {props.origen.name} </p>
        {props.type !== '' ? null : <p>Tipo: {props.type}</p>}

        <div
          className='button'
          status={props.status === 'Alive' ? true : false}>
          {props.status === 'Alive' ? 'VIVO' : 'MUERTO'}
        </div>
      </div>
    </Wrapper>
  );
};

export default Card;
