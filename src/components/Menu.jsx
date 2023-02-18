import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navegacao = styled.nav`
  height: 112px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 3rem;

  @media (max-width: 744px) {
    heigth: 72px;
  }
`;

const Anchor = styled(Link)`
  font-size: 1.25rem;
  line-height: 1.5rem;
`;

const Menu = () => {
  return (
    <header>
      <Navegacao>
        <Anchor to='/'>Início</Anchor>
        <Anchor to='/sobremim'>Sobre Mim</Anchor>
      </Navegacao>
    </header>
  );
};

export default Menu;
