import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 60px;
  width: 100%;
  background-color: #5640ff;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 20px;
`;
const Header = () => {
  return <Wrapper>RICK AND MORTY</Wrapper>;
};

export default Header;
