import { TbCameraHeart } from 'react-icons/tb'
import { LuHeart } from 'react-icons/lu'
import { IoCalendarOutline } from 'react-icons/io5'
import { FaRegImage } from 'react-icons/fa'
import { DivCard, SectionCard } from './styles'

const CardServicos = () => {
  return (
    <SectionCard>
      <DivCard>
        <div>
          <TbCameraHeart size={28} />
          <h4 className="paragrafos">ATENDIMENTO PERSONALIZADO</h4>
          <p>Cada história é única.</p>
          <p>Cada detalhe importa.</p>
        </div>
        <div>
          <LuHeart size={28} />
          <h4 className="paragrafos">REGISTROS AUTÊNTICOS</h4>
          <p>Momentos reais</p>
          <p>emoções verdaeiras.</p>
        </div>
        <div>
          <IoCalendarOutline size={28} />
          <h4 className="paragrafos">FLEXIBILIDADE DE DATAS</h4>
          <p>Agende com tranquilidade</p>
          <p>e segurança.</p>
        </div>
        <div>
          <FaRegImage size={28} />
          <h4 className="paragrafos">ENTREGA DE QUALIDADE</h4>
          <p>Fotos tratadas</p>
          <p>com excêlencia.</p>
        </div>
      </DivCard>
    </SectionCard>
  )
}

export default CardServicos
