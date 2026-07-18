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
import {
  fotosCasamentos,
  fotosIntantis,
  fotosNatalinas
} from '../../data/fotos'

const Carrossel = () => {
  const [indiceAtual, setIndiceAtual] = useState(1)
  const [animando, setAnimando] = useState(false)
  const [direcao, setDirecao] = useState<'left' | 'right'>('right')
  const [categoria, setCategoria] = useState<
    'casamentos' | 'infantil' | 'natal'
  >('casamentos')

  const fotos =
    categoria === 'casamentos'
      ? fotosCasamentos
      : categoria === 'infantil'
      ? fotosIntantis
      : fotosNatalinas

  const voltar = () => {
    if (animando) return

    setDirecao('left')
    setAnimando(true)

    setTimeout(() => {
      setIndiceAtual((indice) => (indice - 1 + fotos.length) % fotos.length)

      setAnimando(false)
    }, 350)
  }

  const avancar = () => {
    if (animando) return

    setDirecao('right')
    setAnimando(true)

    setTimeout(() => {
      setIndiceAtual((indice) => (indice + 1) % fotos.length)

      setAnimando(false)
    }, 350)
  }

  useEffect(() => {
    const intervalo = setInterval(() => {
      avancar()
    }, 10000)

    return () => clearInterval(intervalo)
  }, [])

  return (
    <CarrosselSection>
      <Header>
        <h4>MEU TRABALHO</h4>
        <h2 className="secoes-titulos">Galeria</h2>
        <Abas>
          <a
            className={categoria === 'casamentos' ? 'active' : ''}
            onClick={() => {
              setCategoria('casamentos')
              setIndiceAtual(0)
            }}
          >
            CASAMENTOS
          </a>
          <a
            className={categoria === 'infantil' ? 'active' : ''}
            onClick={() => {
              setCategoria('infantil')
              setIndiceAtual(0)
            }}
          >
            INFANTIL
          </a>
          <a
            className={categoria === 'natal' ? 'active' : ''}
            onClick={() => {
              setCategoria('natal')
              setIndiceAtual(0)
            }}
          >
            NATAL
          </a>
        </Abas>
      </Header>
      <CarrosselDiv>
        <button onClick={voltar} className="seta-esquerda">
          <FaArrowLeft size={20} />
        </button>
        {fotos.map((foto, index) => {
          const total = fotos.length

          let distancia = index - indiceAtual

          if (distancia > total / 2) distancia -= total
          if (distancia < -total / 2) distancia += total

          let position: 'left' | 'center' | 'right' | 'hidden' = 'hidden'

          if (distancia === -1) position = 'left'
          else if (distancia === 0) position = 'center'
          else if (distancia === 1) position = 'right'

          return (
            <CarouselItem key={foto.id} position={position}>
              <img src={foto.imagem} alt="" />
            </CarouselItem>
          )
        })}
        <button onClick={avancar} className="seta-direita">
          <FaArrowRight size={20} />
        </button>
      </CarrosselDiv>
      <IndicadoresCarrossel>
        {fotos.map((_, index) => (
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
