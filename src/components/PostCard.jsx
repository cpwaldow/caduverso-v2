import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DefaultBtn from './DefaultBtn';

const Container = styled.div`
  text-align: center;
  width: 282px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
  border-radius: 0px 0px 10px 10px;
  padding-bottom: 1.5rem;
  transition: transform 0.2s;

  &:hover {
    transform: translate(0, -1rem);
  }

  @media (max-width: 1100px) {
    width: 336px;
  }
`;

const Capa = styled.img`
  width: 100%;
`;

const Titulo = styled.h2`
  font-family: var(--fonte-secundaria);
  font-size: 1.25rem;
  color: var(--azul-escuro);
  line-height: 1.75rem;
  margin: 1.5rem 0 1.75rem;

  @media (max-width: 1100px) {
    font-weight: 600;
  }
`;

const PostCard = ({ post }) => {
  return (
    <Link to={`/posts/${post.id}`}>
      <Container>
        <Capa
          src={`/assets/posts/capa${post.id}.png`}
          alt='Imagem de capa do post'
        />
        <Titulo>{post.titulo}</Titulo>
        <DefaultBtn>Ler</DefaultBtn>
      </Container>
    </Link>
  );
};

export default PostCard;
