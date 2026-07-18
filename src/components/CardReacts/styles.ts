import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { fadeInAnimation } from '../../styles/animacoes'

export const SectionComments = styled.section`
  background-color: ${variaveis.darkSection};
  padding-bottom: 32px;
`

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 95%;
  background-color: ${variaveis.cardEscuro};
  border-radius: 16px;
  max-width: 480px;
`
export const Perfil = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 20px;

  div {
    h4 {
      font-size: 9px;
      margin-bottom: -10px;
    }

    a {
      font-size: 7px;
      color: ${variaveis.destaques};
    }
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
`

export const DivComment = styled.div`
  ${fadeInAnimation}
  display: flex;
  flex-direction: column;
  margin-left: 22px;
  algin-items: center;
  justify-content: center;

  span {
    color: ${variaveis.elementosDestacados};
  }

  p {
    font-family: ${variaveis.fontTitulo2};
    max-width: 160px;
    max-height: 200px;
  }
`

export const Image = styled.img`
  ${fadeInAnimation}
  width: 190px;
  height: 240px;
  object-fit: cover;
  border-radius: 0 16px 16px 0;

  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    rgba(0, 0, 0, 0.2) 20%,
    rgba(0, 0, 0, 0.6) 30%,
    black 35%
  );

  mask-image: linear-gradient(
    to right,
    transparent 0%,
    rgba(0, 0, 0, 0.2) 20%,
    rgba(0, 0, 0, 0.6) 30%,
    black 35%
  );
`

export const Indicadores = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-top: 14px;

  .indicador-ativo {
    background-color: ${variaveis.destaques};
    opacity: 90%;
  }

  a {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${variaveis.lightText2};
    opacity: 30%;
  }
`
