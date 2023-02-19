import React from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  text-decoration: ${(props) => props.underline};
`;

const Menu = () => {
  const { pathname } = useLocation();
  const isMyPage = (path) => path === pathname;

  return (
    <header>
      <Navegacao>
        <Anchor to='/' underline={isMyPage('/') ? 'underline' : ''}>
          Início
        </Anchor>
        <Anchor
          to='/sobremim'
          underline={isMyPage('/sobremim') ? 'underline' : ''}
        >
          Sobre Mim
        </Anchor>
      </Navegacao>
    </header>
  );
};

export default Menu;
