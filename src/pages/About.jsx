import PostModelo from 'components/PostModelo';
import React from 'react';
import capa from 'assets/sobre_mim_capa.png';
import SobreMimFoto from 'assets/cadu-happy.jpeg';
import styled from 'styled-components';

const Subtitulo = styled.h3`
  margin-bottom: 2rem;
  font-size: 2.5rem;

  @media (max-width: 744px) {
    font-size: 1.5rem;
    line-height: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const FotoSobreMim = styled.img`
  margin-bottom: 0.5rem;
  margin-left: 1.5rem;
  width: 40vw;
  float: right;

  @media (max-width: 1100px) {
    float: none;
    display: block;
    margin: 0 auto 2rem;
    width: 70vw;
  }

  @media (max-width: 744px) {
    width: 100%;
  }
`;

const Texto = styled.p`
  text-align: justify;
  font-size: 1.5rem;
  line-height: 2.25rem;
  margin-bottom: 1.5rem;

  @media (max-width: 1100px) {
    margin-bottom: 2rem;
  }

  @media (max-width: 744px) {
    font-size: 1rem;
    line-height: 1.75rem;
  }
`;

const About = () => {
  return (
    <PostModelo fotoCapa={capa} titulo='Sobre Mim'>
      <Subtitulo>Oi, eu sou o Cadu</Subtitulo>
      <FotoSobreMim src={SobreMimFoto} alt='Foto Cadu Sorrindo' />
      <Texto>
        Oi, tudo bem? Eu sou desenvolvedor Front-end e instrutor Web e estou
        feliz de te ver por aqui.
      </Texto>
      <Texto>
        Meu primeiro contato com programação foi enquanto criança, fiz uns jogos
        em flash mas ficaram mais parecidos com transição de slides do que com
        um jogo de fato, quando terminei o ensino médio entrei na faculdde de
        Comunicação - Publicidade e Propaganda e no final do curso voltei a ter
        contato com desenvolvimento web para fazer um site para uma ONG.
      </Texto>
      <Texto>
        Depois que que formei entrei de cabeça para estudar programação, como
        lógica e algoritmo, foquei meus estudos para desenvolvimento Front-end,
        onde aprendi sobre HTML, CSS e javaScript que me fizeram dar um grande
        passo na minha carreira profissional.
      </Texto>
      <Texto>
        Com isso tive minha experiência de dev mais próxima da realidade, com
        prazos de implementação para o site, e aprendi muito enquanto
        codificava.
      </Texto>
      <Texto>
        Em 2019 tive minha primeira experiência na área de tecnologia, atuando
        como Quality Assurance, foi o primeiro contato com tecnologia no mercado
        de trabalho e me fez brilhar os olhos, comecei a estudar ainda mais
        javaScript para começar a fazer meus primeiros testes automatizados e
        fazer rotinas mais rápidas e seguras.
      </Texto>
      <Texto>
        Depois comecei a trabalhar como desenvolvedor Front-end e estou aqui até
        hoje, além disso, comecei a trabalhar como instrutor de desenvolvimento
        web para as pessoas que se interessavam em fazer mudança de carreira e
        iniciar no mundo da tecnologia e ter contato com tanta gente me tornou
        uma pessoa e um profissional ainda melhor.
      </Texto>
    </PostModelo>
  );
};

export default About;
