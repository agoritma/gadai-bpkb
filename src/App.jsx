import NavBar from './assets/components/NavBar'
import './App.css'
import Jumbotron from './assets/components/Jumbotron'
import BenefitSection from './assets/components/BenefitSection'
import ServiceSection from './assets/components/ServiceSection'
import RequirementSection from './assets/components/RequirementSection'
import AboutSection from './assets/components/AboutSection'
import Footer from './assets/components/Footer'

const syarats = [
  "Lorem ipsum dolor sit amet consectetur.",
  "Lorem ipsum dolor sit amet consectetur.",
  "Lorem ipsum dolor sit amet consectetur."
]

const reqs = [
  "Lorem ipsum dolor sit amet consectetur.",
  "Lorem ipsum dolor sit amet consectetur.",
  "Lorem ipsum dolor sit amet consectetur.",
  "Lorem ipsum dolor sit amet consectetur.",
  "Lorem ipsum dolor sit amet consectetur."
]

function App() {
  return (
    <>
      <header>
        <NavBar />
        <Jumbotron />
      </header>
      <main className='flex flex-col'>
        <BenefitSection />
        <ServiceSection />
        <RequirementSection syaratList={syarats} reqList={reqs}/>
        <AboutSection />
      </main>
      <footer className='flex' id='kontak'>
        <Footer xUrl={'#'} ttUrl={'#'} ytUrl={'#'} igUrl={'#'} fbUrl={'#'}/>
      </footer>
    </>
  )
}

export default App
