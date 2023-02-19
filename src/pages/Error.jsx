import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

const Message = styled.p`
  width: 500px;
  margin: 0 auto;
`;

const Error = () => {
  return (
    <Container>
      <h1>erro 404</h1>
      <h2>Página não encontrada! 😢</h2>
      <Message>
        Tem certeza de que era isso que você estava procurando? Aguarde uns
        instantes e recarregue a página, ou volte para a página inicial.
      </Message>
    </Container>
  );
};

export default Error;
