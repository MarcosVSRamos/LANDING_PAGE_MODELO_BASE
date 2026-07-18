import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { fadeInAnimation } from '../../styles/animacoes'

type SideProps = {
  position: 'left' | 'right' | 'center' | 'hidden'
  x?: number
  scale?: number
  opacity?: number
}

export const CarrosselSection = styled.section`
  background-color: ${variaveis.darkSection};
  text-align: center;
  padding-top: 28px;
  bottom: -2px;
  overflow: hidden;
  max-width: 100%;
`

export const Header = styled.header`
  ${fadeInAnimation}
  display: block;

  h4 {
    color: ${variaveis.textSecondary};
    font-size: 9px;
  }

  h2 {
    margin-bottom: 16px;
  }
`

export const CarrosselDiv = styled.div`
  ${fadeInAnimation}
  position: relative;
  max-width: 500px;
  height: 380px;
  margin: 0 auto;

  img {
    border-radius: 22px;
  }

  .back-image {
    width: 110px;
    height: 360px;
    z-index: -1;

    object-fit: cover;
    border-radius: 22px;

    opacity: 0.45;

    filter: brightness(0.55) saturate(0.6) blur(0.5px);

    transition: transform 0.35s, opacity 0.35s;
  }

  .image-next {
    transform: translateX(360px) scale(1);

    opacity: 0;

    z-index: 0;

    img {
      width: 110px;
      height: 360px;

      object-fit: cover;

      filter: brightness(0.55) saturate(0.6) blur(0.5px);
    }
  }

  button {
    position: absolute;
    top: 45%;
    color: ${variaveis.lightText2};
    cursor: pointer;
    background-color: transparent;
    border: none;
    z-index: 10;
  }

  .seta-esquerda {
    left: 28px;
  }

  .seta-direita {
    right: 28px;
  }

  button:hover {
    color: ${variaveis.elementosDestacados};
  }
`

export const Abas = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 10px;
  margin-bottom: 16px;

  a {
    font-weight: bold;
    padding: 8px;
    border-radius: 16px;
    border: solid 1px ${variaveis.background};
  }

  .active {
    color: ${variaveis.text};
    background-color: ${variaveis.buttom};
    border-none;
  }
`

export const CarouselItem = styled.div<SideProps>`
  position: absolute;
  z-index: 5;
  left: 50%;
  max-width: 500px;

  transition: all 0.6s cubic-bezier(0.22, 0.61, 0.36, 1);

  ${({ position }) => {
    switch (position) {
      case 'left':
        return `
          transform: translateX(calc(-50% - 150px));
          opacity: .45;
          z-index: 1;
        `

      case 'center':
        return `
          transform: translateX(-50%);
          opacity: 1;
          z-index: 2;
        `

      case 'right':
        return `
          transform: translateX(calc(-50% + 150px));
          opacity: .45;
          z-index: 1;
        `

      default:
        return `
          transform: translateX(-50%);
          opacity: 0;
          pointer-events: none;
          z-index: 0;
        `
    }
  }}

  img {
    object-fit: cover;
    border-radius: 24px;

    transition: all 0.6s cubic-bezier(0.22, 0.61, 0.36, 1);

    ${({ position }) => {
      switch (position) {
        case 'center':
          return `
            width:220px;
            height:360px;

            filter:none;

            box-shadow:
              0 0 0 2px rgba(214,189,158,.45),
              0 18px 40px rgba(0,0,0,.45);
          `

        case 'left':
        case 'right':
          return `
            width:110px;
            height:360px;

            filter:brightness(.55)
                   saturate(.6)
                   blur(.5px);
          `

        default:
          return `
            width:110px;
            height:360px;
          `
      }
    }}
  }
`

export const IndicadoresCarrossel = styled.div`
  ${fadeInAnimation}
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  padding: 8px 0;

  .indicador-ativo {
    background-color: ${variaveis.destaques};
    opacity: 90%;
  }

  button {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: none;
    background-color: ${variaveis.lightText2};
    opacity: 30%;
  }
`
