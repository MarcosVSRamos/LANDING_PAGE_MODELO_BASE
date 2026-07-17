import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import EstiloGlobal, { MainContainer } from './styles'
import CardServicos from './components/CardServicos'
import Carrossel from './components/Carrossel'
import CardReacts from './components/CardReacts'

function App() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const header = document.getElementById('header')

    if (!header) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowButton(!entry.isIntersecting)
      },
      {
        threshold: 0.1
      }
    )

    observer.observe(header)

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <MainContainer>
        <EstiloGlobal />
        <Header id="header" />
        <Hero />
        <Carrossel />
        <CardServicos />
        <CardReacts />
        <Footer visible={showButton} />
      </MainContainer>
    </>
  )
}

export default App
