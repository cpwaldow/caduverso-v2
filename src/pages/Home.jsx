import React from 'react';
import Banner from 'components/Banner';
import styled from 'styled-components';
import posts from 'json/posts.json';
import Post from 'components/Post';

const PostList = styled.ul`
  padding: 0 6vw 3.625rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;

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
      <Banner />
      <PostList>
        {posts.map((post) => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </PostList>
    </main>
  );
};

export default Home;
