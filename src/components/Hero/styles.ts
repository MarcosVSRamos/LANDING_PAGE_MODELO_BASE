import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { fadeInAnimation } from '../../styles/animacoes'

export const DivHero = styled.div`
  ${fadeInAnimation}
  color: ${variaveis.text};
  display: flex;
  align-items: center;
  margin-left: 12px;
  height: 30vh;
  top: -12px;

  @media (min-width: 766px) {
    justify-content: center;
  }
`
export const DivImage = styled.div`
  width: 170px;
  margin-right: 32px;

  img {
    width: 100%;
    height: auto;
    border-radius: 88px 88px 14px 88px;
  }
`
export const DivDescricoes = styled.div`
  span {
    font-size: 9px;
    font-weight: 500;
    color: ${variaveis.textSecondary};
  }

  h2 {
    margin-bottom: -14px;
  }

  .span-title {
    font-size: 28px;
    font-family: ${variaveis.fontElegante};
    font-weight: 500;
    margin-left: 6px;
  }

  .div-paragrafo {
    margin-top: 28px;
    margin-bottom: 22px;
  }

  p {
    margin-bottom: 2px;
    font-weight: 500;
  }

  a {
    color: ${variaveis.text};
    padding-bottom: 4px;
    font-size: 9px;
    font-weight: bold;
    border-bottom: solid 1px ${variaveis.text};
  }
`
