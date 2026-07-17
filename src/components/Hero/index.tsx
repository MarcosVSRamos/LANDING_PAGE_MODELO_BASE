import variaveisImagens from '../../styles/variaveisImagens'
import { DivDescricoes, DivHero, DivImage } from './styles'

const Hero = () => {
  return (
    <DivHero>
      <DivImage>
        <img src={variaveisImagens.heroImage} alt="fotógrafa" />
      </DivImage>
      <DivDescricoes>
        <span>SOBRE MIM</span>
        <h2 className="secoes-titulos">Muito prazer,</h2>
        <h2 className="span-title">sou Maria ♡</h2>
        <div className="div-paragrafo">
          <p className="paragrafos">Fotógrafa especializada em registrar</p>
          <p className="paragrafos">momentos únicos com leveza,</p>
          <p className="paragrafos">sensibilidade e autenticidade.</p>
        </div>
        <a href="#sobre-mim">SAIBA MAIS SOBRE MIM</a>
      </DivDescricoes>
    </DivHero>
  )
}

export default Hero
