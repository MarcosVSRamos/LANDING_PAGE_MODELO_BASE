import { useEffect, useState } from 'react'

import { FaArrowLeft } from 'react-icons/fa6'
import { FaArrowRight } from 'react-icons/fa6'

import {
  Abas,
  CarouselItem,
  CarrosselDiv,
  CarrosselSection,
  Header,
  IndicadoresCarrossel
} from './styles'
import { fotosCasamentos } from '../../data/fotos'

const Carrossel = () => {
  const [indiceAtual, setIndiceAtual] = useState(1)
  const [animando, setAnimando] = useState(false)
  const [direcao, setDirecao] = useState<'left' | 'right'>('right')

  const anterior =
    (indiceAtual - 1 + fotosCasamentos.length) % fotosCasamentos.length

  const atual = indiceAtual

  const proxima = (indiceAtual + 1) % fotosCasamentos.length

  const entrando = (indiceAtual + 2) % fotosCasamentos.length

  const total = fotosCasamentos.length

  let distancia = index - indiceAtual

  if (distancia > total / 2) distancia -= total
  if (distancia < -total / 2) distancia += total

  let position: 'left' | 'center' | 'right' | 'hidden'

  if (distancia === -1) {
    position = 'left'
  } else if (distancia === 0) {
    position = 'center'
  } else if (distancia === 1) {
    position = 'right'
  } else {
    position = 'hidden'
  }

  const voltar = () => {
    if (animando) return

    setDirecao('left')
    setAnimando(true)

    setTimeout(() => {
      setIndiceAtual(
        (indice) =>
          (indice - 1 + fotosCasamentos.length) % fotosCasamentos.length
      )

      setAnimando(false)
    }, 350)
  }

  const avancar = () => {
    if (animando) return

    setDirecao('right')
    setAnimando(true)

    setTimeout(() => {
      setIndiceAtual((indice) => (indice + 1) % fotosCasamentos.length)

      setAnimando(false)
    }, 350)
  }

  useEffect(() => {
    const intervalo = setInterval(() => {
      avancar()
    }, 7000)

    return () => clearInterval(intervalo)
  }, [])

  return (
    <CarrosselSection>
      <Header>
        <h4>MEU TRABALHO</h4>
        <h2 className="secoes-titulos">Galeria</h2>
        <Abas>
          <a className="active">CASAMENTOS</a>
          <a>INFANTIL</a>
          <a>NATAL</a>
        </Abas>
      </Header>
      <CarrosselDiv>
        <CarouselItem className="side" position="left">
          <button onClick={voltar}>{<FaArrowLeft size={18} />}</button>
          <img
            className={`back-image ${
              animando && direcao === 'left' ? 'slide-out-left' : ''
            }`}
            src={fotosCasamentos[anterior].imagem}
            alt="noiva"
          />
        </CarouselItem>
        <CarouselItem position="center">
          <img
            className={`image-selected ${
              animando
                ? direcao === 'right'
                  ? 'center-to-left'
                  : 'center-to-right'
                : ''
            }`}
            src={fotosCasamentos[atual].imagem}
            alt="noiva"
          />
        </CarouselItem>
        <CarouselItem className="side" position="right">
          <img
            className={`back-image ${
              animando && direcao === 'right' ? 'slide-out-right' : ''
            }`}
            src={fotosCasamentos[proxima].imagem}
            alt="noiva"
          />
          <button onClick={avancar}>{<FaArrowRight size={18} />}</button>
        </CarouselItem>
        <CarouselItem
          className={`image-next ${
            animando && direcao === 'left'
              ? 'slide-out-left-next'
              : 'slide-out-right-next'
          }`}
          position="next"
        >
          <img src={fotosCasamentos[entrando].imagem} />
        </CarouselItem>
      </CarrosselDiv>
      <IndicadoresCarrossel>
        {fotosCasamentos.map((_, index) => (
          <button
            key={index}
            className={index === indiceAtual ? 'indicador-ativo' : ''}
            onClick={() => setIndiceAtual(index)}
          />
        ))}
      </IndicadoresCarrossel>
    </CarrosselSection>
  )
}

export default Carrossel
