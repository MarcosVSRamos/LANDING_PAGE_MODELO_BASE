import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
  position: relative;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  letter-spacing: 1px;


  body{
    border:none;
    color: ${variaveis.lightText};
    font-family: ${variaveis.fontBase};
    background-color: ${variaveis.background};

    .paragrafos {
      font-size: 10px;
    }

    .secoes-titulos {
      font-size: 22px;
      font-family: ${variaveis.fontTitulo2};
      font-weight: 600;
    }
  }
  }
  `

export const MainContainer = styled.div`
  position: relative;
  display: block;
  margin: 0 auto;
`

export default EstiloGlobal
