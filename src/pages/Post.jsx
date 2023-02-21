import React from 'react';
import { useParams } from 'react-router-dom';
import posts from 'json/posts.json';
import PostModelo from 'components/PostModelo';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const Post = () => {
  const parametros = useParams();
  const { titulo, texto } = posts.find(
    ({ id }) => id === Number(parametros.id),
  );
  return (
    <PostModelo
      fotoCapa={`/assets/posts/capa${parametros.id}.png`}
      titulo={titulo}
    >
      <ReactMarkdown>{texto}</ReactMarkdown>
    </PostModelo>
  );
};

export default Post;
