import React from 'react';
import styled from 'styled-components';
import { ReactComponent as MarcaRegistrada } from 'assets/marca_registrada.svg';

const Container = styled.footer`
  background-color: var(--azul-escuro);
  color: var(--branco);
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  colum-gap: 0.5rem;
`;

const Footer = () => {
  return (
    <Container>
      <MarcaRegistrada />
      <h4>Desenvolvido por Alura.</h4>
    </Container>
  );
};

export default Footer;
