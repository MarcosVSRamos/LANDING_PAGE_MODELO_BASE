import { FaArrowLeft } from 'react-icons/fa6'
import { FaArrowRight } from 'react-icons/fa6'
import {
  Abas,
  CarrosselDiv,
  CarrosselSection,
  Header,
  SelectedImage,
  Side
} from './styles'
import variaveisImagens from '../../styles/variaveisImagens'

const Carrossel = () => {
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
        <Side>
          <button className="left-button">{<FaArrowLeft size={18} />}</button>
          <img
            className="back-image"
            src={variaveisImagens.casamento1}
            alt="noiva"
          />
        </Side>
        <SelectedImage>
          <img
            className="image-selected"
            src={variaveisImagens.casamento2}
            alt="noiva"
          />
        </SelectedImage>
        <Side>
          <img
            className="back-image"
            src={variaveisImagens.casamento3}
            alt="noiva"
          />
          <button className="right-button">{<FaArrowRight size={18} />}</button>
        </Side>
      </CarrosselDiv>
    </CarrosselSection>
  )
}

export default Carrossel
