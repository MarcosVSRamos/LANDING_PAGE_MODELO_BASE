import { useEffect, useState } from 'react'

import { FaRegComments } from 'react-icons/fa6'
import {
  Div,
  DivComment,
  Image,
  Indicadores,
  Perfil,
  SectionComments
} from './styles'
import { commentsDestaques } from '../../data/comments'

const CardReacts = () => {
  const [comentario, setComentario] = useState(2)

  const comentarioAtivo = commentsDestaques.find(
    (item) => item.id === comentario
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setComentario((comentarioAtual) =>
        comentarioAtual === commentsDestaques.length ? 1 : +1
      )
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <SectionComments>
      <Div key={comentario}>
        <DivComment>
          <span>
            <FaRegComments size={40} />
          </span>
          <p className="paragrafos">{`"${comentarioAtivo?.text}"`}</p>
          <Perfil>
            <img src={comentarioAtivo?.fotoDestaque} alt="noivos" />
            <div>
              <h4>{comentarioAtivo?.nick}</h4>
              <a href="#">{comentarioAtivo?.idArroba}</a>
            </div>
          </Perfil>
          <Indicadores>
            <button
              onClick={() => setComentario(1)}
              className={comentario === 1 ? 'indicador-ativo' : ''}
            ></button>
            <button
              onClick={() => setComentario(2)}
              className={comentario === 2 ? 'indicador-ativo' : ''}
            ></button>
            <button
              onClick={() => setComentario(3)}
              className={comentario === 3 ? 'indicador-ativo' : ''}
            ></button>
          </Indicadores>
        </DivComment>
        <Image src={comentarioAtivo?.fotoDestaque} alt="noivos" />
      </Div>
    </SectionComments>
  )
}

export default CardReacts
