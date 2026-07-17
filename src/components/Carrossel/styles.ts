import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { fadeInAnimation } from '../../styles/animacoes'

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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 16px;

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

    transition: 0.35s;
  }
`

export const Side = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    background-color: transparent;
    color: ${variaveis.lightText2};

    span {
      margin-left: 6px;
    }
  }
  button:hover {
    color: ${variaveis.destaques};
  }

  .left-button {
    right: 30px;
  }

  .right-button {
    left: 30px;
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

export const SelectedImage = styled.div`

  img {
      object-fit: cover;
      width: 220px;
      height: 360px;
      border-radius: 24px;

      transform: scale(1.04);

      transition: 0.35s ease;

      box-shadow: 0 0 0 2px rgba(214, 189, 158, 0.45),
        0 18px 40px rgba(0, 0, 0, 0.45), 0 0 25px rgba(214, 189, 158, 0.18);
    }
  }

`
