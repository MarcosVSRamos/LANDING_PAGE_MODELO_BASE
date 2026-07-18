import styled from 'styled-components'
import { fadeInAnimation } from '../../styles/animacoes'
import variaveis from '../../styles/variaveis'

export const FooterSection = styled.footer`
  background-color: ${variaveis.darkSection};
  padding-bottom: 56px;
  paddging-top: 8px;
  margin-top: -2px;
`
export const CardFooter = styled.div`
  ${fadeInAnimation}
  display: flex;
  width: 95%;
  max-width: 480px;
  background-color: ${variaveis.cardEscuro};
  margin: 0 auto;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  padding: 8px 0;

  a {
    color: ${variaveis.lightText2};
  }

  .div {
    width: 45%;
    border-right: solid 1px ${variaveis.lightText2};
    padding-right: 16px;
  }
`

export const DivMarca = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  padding-bottom: 8px;

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

export const DivTexto = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 16px;
`

export const Incones = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  text-align: center;

  a {
    display: flex;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: solid 1px ${variaveis.lightText2};
    align-items: center;
    justify-content: center;
  }
`

export const DivInformacoes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  width: 45%;
  padding-left: 16px;

  h4 {
    font-size: 12px;
  }

  a {
    display: flex;
    font-size: 10px;
    gap: 12px;
  }
`
