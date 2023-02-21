import React from 'react';
import { useParams } from 'react-router-dom';
import posts from 'json/posts.json';
import PostModelo from 'components/PostModelo';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import PostMarkdownContainer from 'components/PostMarkdownContainer';

const Post = () => {
  const parametros = useParams();
  const post = posts.find(({ id }) => id === Number(parametros.id));
  if (!post) return <h1>Post não encontrado!</h1>;
  return (
    <PostModelo
      fotoCapa={`/assets/posts/capa${parametros.id}.png`}
      titulo={post.titulo}
    >
      <PostMarkdownContainer>
        <ReactMarkdown>{post.texto}</ReactMarkdown>
      </PostMarkdownContainer>
    </PostModelo>
  );
};

export default Post;
