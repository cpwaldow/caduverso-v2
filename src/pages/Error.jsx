import React from 'react';
import styled from 'styled-components';
import erro404 from 'assets/erro_404.png';

const Container = styled.div`
  position: relative;
  text-align: center;
  background-color: var(--azul-escuro);
  color: var(--branco);
  padding: 0 1.5rem 6.5rem;
`;

const Texto404 = styled.span`
  display: block;
  color: var(--azul-medio);
  font-family: var(--fonte-secundaria);
  font-size: 6rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const Titulo = styled.h1`
  font-family: var(--fonte-secundaria);
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const Paragrafo = styled.p`
  font-size: 1.5rem;
  line-height: 1.75rem;
`;

const BotaoContainer = styled.div`
  text-align: start;
  margin-top: 3.5rem;
  margin-left: 30vw;
`;

const ImagemCachorro = styled.img`
  position: absolute;
  height: 25vw;
  bottom: calc(-25vw * 0.5);
`;

const EspacoEmBranco = styled.div`
  height: 40vh;
`;

const Error = () => {
  return (
    <section>
      <Container>
        <Texto404>404</Texto404>
        <Titulo>Ops! Página não encontrada.</Titulo>
        <Paragrafo>
          Tem certeza que era isso que você estava procurando?
        </Paragrafo>
        <Paragrafo>
          Aguarde um instante e recarregue a página, ou volte para a página
          inicial.
        </Paragrafo>
        <BotaoContainer>
          <button>Voltar</button>
        </BotaoContainer>
        <ImagemCachorro src={erro404} alt='Cachorro de óculos' />
      </Container>
      <EspacoEmBranco />
    </section>
  );
};

export default Error;
