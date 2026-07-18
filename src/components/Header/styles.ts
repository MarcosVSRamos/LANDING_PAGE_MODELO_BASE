import styled from 'styled-components'
import variaveisImagens from '../../styles/variaveisImagens'
import variaveis from '../../styles/variaveis'
import { fadeInAnimation } from '../../styles/animacoes'

export const HeaderContent = styled.header`
  display: block;
  position: relative;
  padding: 0 32px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.45)),
    url(${variaveisImagens.backgroundHeader});

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-bottom: 48px;

  @media (min-width: 766px) {
  }

  .divider {
    display: block;
    width: 100vw;
    position: absolute;
    height: 50px;
    left: 0;
    bottom: -2px;
  }

  button {
    ${fadeInAnimation}
  }
`

export const DivMarca = styled.div`
  ${fadeInAnimation}
  display: flex;
  align-items: center;
  text-align: center;
  padding: 0.6rem 0;
  margin-bottom: 12px;

  div {
    text-align: center;
    align-items: center;
    margin-left: 0.6rem;
    margin-bottom: 0.3rem;

    h3 {
      font-family: ${variaveis.fontTitulo};
      font-size: 0.5rem;
    }

    h4 {
      color: ${variaveis.textSecondary};
      font-size: 0.3rem;
    }
  }

  .marca {
    font-family: ${variaveis.fontElegante};
    font-size: 1.6rem;
  }
`

export const DivTitulo = styled.div`
  ${fadeInAnimation}
  h2 {
    color: ${variaveis.textSecondary};
    margin-bottom: -4px;
  }

  .titulo {
    display: block;
    font-family: ${variaveis.fontTitulo2};
    margin-bottom: 12px;
    h1 {
      font-size: 1.8rem;
      margin-bottom: -18px;
      font-weight: 400;
    }
    span {
      font-size: 1.8rem;
      color: ${variaveis.textSecondary};
      font-weight: 500;
    }
  }
`

export const DivDescricao = styled.div`
  ${fadeInAnimation}
  margin-bottom: 18px;

  p {
    margin-bottom: 3px;
  }
`
