import {
  CardFooter,
  DivInformacoes,
  DivMarca,
  DivTexto,
  FooterSection,
  Incones
} from './styles'
import { FaInstagram } from 'react-icons/fa'
import { SlSocialFacebook } from 'react-icons/sl'
import { FiPhone } from 'react-icons/fi'
import { IoMailOutline } from 'react-icons/io5'
import { IoLocationOutline } from 'react-icons/io5'
import { FaRegClock } from 'react-icons/fa'

const Footer = () => {
  return (
    <FooterSection>
      <CardFooter>
        <div className="div">
          <DivMarca>
            <span className="marca">M</span>
            <div>
              <h3>MARIA LOPES</h3>
              <h4>FOTOGRAFIAS</h4>
            </div>
          </DivMarca>
          <DivTexto>
            <p className="paragrafos">Fotografias que eternizam</p>
            <p className="paragrafos">emoções e momentos</p>
            <p className="paragrafos">inesquecíveis.</p>
          </DivTexto>
          <Incones>
            <a href="#">
              <FaInstagram size={20} />
            </a>
            <a href="#">
              <SlSocialFacebook size={20} />
            </a>
          </Incones>
        </div>
        <DivInformacoes>
          <h4>INFORMAÇÕES</h4>
          <a href="#">
            <span>
              <FiPhone size={16} />
            </span>
            {'(67) 99999-9999'}
          </a>
          <a href="#">
            <span>
              <IoMailOutline size={16} />
            </span>
            {'contato@gmail.com.br'}
          </a>
          <a href="#">
            <span>
              <IoLocationOutline size={16} />
            </span>
            {'R. Dr. Coutinho 999'}
          </a>
          <a href="#">
            <span>
              <FaRegClock size={16} />
            </span>
            {'Seg - Sex: 9h às 18h'}
          </a>
        </DivInformacoes>
      </CardFooter>
    </FooterSection>
  )
}

export default Footer
