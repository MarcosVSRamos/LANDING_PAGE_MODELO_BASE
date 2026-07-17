import Button from '../Button'
import { FaWhatsapp } from 'react-icons/fa'
import { FooterDiv } from './styles'

type Props = {
  visible: boolean
}

const Footer = ({ visible }: Props) => {
  return (
    <FooterDiv visible={visible}>
      <Button
        iconPosition="left"
        nomeButtom="CHAMAR NO WHATSAPP"
        icon={<FaWhatsapp size={12} />}
      />
    </FooterDiv>
  )
}

export default Footer
