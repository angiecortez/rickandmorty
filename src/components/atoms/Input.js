import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
  input {
    height: 50px;
    width: 80%;
  }
`;

const Input = (props) => {
  return (
    <Wrapper>
      <input
        type='text'
        placeholder='Busca a tu personaje'
        onChange={props.onChange}
      />
    </Wrapper>
  );
};

export default Input;
