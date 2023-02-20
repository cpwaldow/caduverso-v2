import React from 'react';
import styled from 'styled-components';

const Container = styled.article`
  color: var(--cor-fonte-post);
  position: relative;
`;

const FotoCapa = styled.div`
  width: 100%;
  height: 204px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.foto});
  opacity: 0.3;
  position: absolute;
  top: 0;
  z-index: -1;

  @media (max-width: 744px) {
    height: 104px;
  }
`;

const Titulo = styled.h2`
  height: 204px;
  font-family: var(--fonte-secundaria);
  padding: 0 7.5rem;
  font-size: 4rem;
  display: flex;
  align-items: center;

  @media (max-width: 744px) {
    height: 104px;
    padding: 0 1rem;
    font-size: 2rem;
  }
`;

const PostConteudoContainer = styled.div`
  padding: 2.5rem 7.5rem 4.5rem;

  @media (max-width: 744px) {
    padding: 2rem 1.5rem 1.5rem;
  }
`;

const PostModelo = ({ children, fotoCapa, titulo }) => {
  return (
    <Container>
      <FotoCapa foto={fotoCapa}></FotoCapa>
      <Titulo>{titulo}</Titulo>
      <PostConteudoContainer>{children}</PostConteudoContainer>
    </Container>
  );
};

export default PostModelo;
