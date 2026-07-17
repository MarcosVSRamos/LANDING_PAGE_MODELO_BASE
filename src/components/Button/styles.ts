import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const DivButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 26px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: ${variaveis.buttom};
    border: none;
    border-radius: 18px;
    cursor: pointer;

    .button-content {
      color: ${variaveis.text};
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      font-weight: 600;
      font-family: ${variaveis.fontBase};
      font-size: 8px;
      letter-spacing: 1px;
      line-height: 1;

      p {
        margin: 0;
      }
    }

    &:hover {
      background-color: ${variaveis.buttomHover};
    }
  }
`
