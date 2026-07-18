import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { fadeInAnimation } from '../../styles/animacoes'

export const SectionCard = styled.section`
  background-color: ${variaveis.darkSection};
  padding: 32px 0;
  margin-bottom: -2px;
`

export const DivCard = styled.div`
  ${fadeInAnimation}
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  gap: 4px;
  padding: 14px;
  width: 95%;
  border-radius: 16px;

  max-width: 480px;

  color: ${variaveis.background};
  background-color: ${variaveis.cardEscuro};

  box-shadow: 0 0 0 1px rgba(43, 42, 42, 0.45), 0 18px 40px rgba(0, 0, 0, 0.45),
    0 0 10px rgba(138, 128, 117, 0.18);

  div {
    max-width: 128px;
    display: block;
  }

  h4 {
    font-size: 8px;
    margin-bottom: 8px;
  }

  p {
    font-size: 6px;
    font-weight: 400;
  }
`
