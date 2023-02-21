import React from 'react';
import styled from 'styled-components';
import posts from 'json/posts.json';
import PostCard from 'components/PostCard';

const PostList = styled.ul`
  padding: 0 6vw 3.625rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: -2.5rem;

  @media (max-width: 1100px) {
    margin-top: 0;
    padding: 2rem 1.5rem 3.625rem;
  }

  @media (max-width: 744px) {
    padding: 2rem 1rem 3rem;
  }
`;

const Home = () => {
  return (
    <main>
      <PostList>
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))}
      </PostList>
    </main>
  );
};

export default Home;
