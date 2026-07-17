import Button from '../Button'
import { DivDescricao, DivMarca, DivTitulo, HeaderContent } from './styles'
import image from '../../assets/svg/divider.svg'
import { FaArrowRight } from 'react-icons/fa'

type Props = {
  id?: string
}

const Header = ({ id }: Props) => {
  return (
    <HeaderContent id={id}>
      <DivMarca>
        <span className="marca">M</span>
        <div>
          <h3>MARIA LOPES</h3>
          <h4>FOTOGRAFIAS</h4>
        </div>
      </DivMarca>
      <DivTitulo>
        <h2 className="paragrafos">CAPTURANDO</h2>
        <div className="titulo">
          <h1>histórias</h1>
          <span>reais</span>
        </div>
      </DivTitulo>
      <DivDescricao>
        <p className="paragrafos">Fotografias que eternizam</p>
        <p className="paragrafos">emoções e momentos</p>
        <p className="paragrafos">inesquecíveis.</p>
      </DivDescricao>
      <Button
        iconPosition="right"
        nomeButtom="CONHEÇA MEU TRABALHO"
        icon={<FaArrowRight size={12} />}
      />
      <img className="divider" src={image} alt="divisor de seçção" />
    </HeaderContent>
  )
}

export default Header
