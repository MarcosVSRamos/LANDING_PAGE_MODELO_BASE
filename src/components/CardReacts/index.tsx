import variaveisImagens from '../../styles/variaveisImagens'
import { FaRegComments } from 'react-icons/fa6'
import {
  Div,
  DivComment,
  Image,
  Indicadores,
  Perfil,
  SectionComments
} from './styles'

const CardReacts = () => {
  return (
    <SectionComments>
      <Div>
        <DivComment>
          <span>
            <FaRegComments size={40} />
          </span>
          <p className="paragrafos">
            {
              '"Maria resgistrou nosso dia de uma forma que superou todas as nossas expectativas. Cada foto nos transporta de volta àquele momento."'
            }
          </p>
          <Perfil>
            <img src={variaveisImagens.comentario} alt="noivos" />
            <div>
              <h4>JULIANA ALMEIDA</h4>
              <a href="#">@juliana__almeida</a>
            </div>
          </Perfil>
          <Indicadores>
            <a href="#"></a>
            <a className="indicador-ativo" href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
          </Indicadores>
        </DivComment>
        <Image src={variaveisImagens.comentario} alt="noivos" />
      </Div>
    </SectionComments>
  )
}

export default CardReacts
