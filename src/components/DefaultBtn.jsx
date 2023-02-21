import styled from 'styled-components';

const DefaultBtn = styled.button`
  display: inline-block;
  border-radius: 24px;
  padding: ${({ large }) => (large ? '1.5rem 2.75rem' : '0.75rem 1.5rem')};
  font-size: ${({ large }) => (large ? '1.5rem' : '1.125rem')};
  line-height: ${({ large }) => (large ? '1.125rem' : '1.125rem')};
  background-color: var(--azul-medio);
  color: var(--branco);
  border: 3px solid var(--azul-medio);
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    border: 3px solid var(--azul-escuro);
  }

  @media (max-width: 1100px) {
    padding: 0.6875rem 1.5rem;
    font-size: 1.375rem;
  }
`;

export default DefaultBtn;
