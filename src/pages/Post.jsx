import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import posts from 'json/posts.json';
import PostModelo from 'components/PostModelo';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import PostMarkdownContainer from 'components/PostMarkdownContainer';
import Error from './Error';
import DefaultPage from 'components/DefaultPage';

const Post = () => {
  const parametros = useParams();
  const post = posts.find(({ id }) => id === Number(parametros.id));
  if (!post) return <Error />;
  return (
    <Routes>
      <Route path='*' element={<DefaultPage />}>
        <Route
          index
          element={
            <PostModelo
              fotoCapa={`/assets/posts/capa${parametros.id}.png`}
              titulo={post.titulo}
            >
              <PostMarkdownContainer>
                <ReactMarkdown>{post.texto}</ReactMarkdown>
              </PostMarkdownContainer>
            </PostModelo>
          }
        />
      </Route>
    </Routes>
  );
};

export default Post;
