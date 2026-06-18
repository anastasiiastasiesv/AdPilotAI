import './styles.css'
import { useLang } from './hooks/useLang'
import { Navbar } from './sections/Navbar'
import { Hero } from './sections/Hero'
import { Marquee } from './sections/Marquee'
import { Examples } from './sections/Examples'
import { Features } from './sections/Features'
import { HowItWorks } from './sections/HowItWorks'
import { EarlyAccess } from './sections/EarlyAccess'
import { FAQ } from './sections/FAQ'
import { FinalCTA } from './sections/FinalCTA'
import { Footer } from './sections/Footer'

export default function App() {
  const [lang, setLang, t] = useLang()

  return (
    <>
      <Navbar lang={lang} setLang={setLang} t={t} />
      <Hero t={t} lang={lang} />
      <Marquee t={t} />
      <Examples t={t} lang={lang} />
      <Features t={t} />
      <HowItWorks t={t} />
      <EarlyAccess t={t} />
      <FAQ t={t} />
      <FinalCTA t={t} />
      <Footer t={t} />
    </>
  )
}
