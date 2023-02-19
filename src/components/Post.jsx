import React from 'react';
import styled from 'styled-components';

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

const Post = ({ post }) => {
  return (
    <Container>
      <Capa
        src={`/assets/posts/capa${post.id}.png`}
        alt='Imagem de capa do post'
      />
    </Container>
  );
};

export default Post;
