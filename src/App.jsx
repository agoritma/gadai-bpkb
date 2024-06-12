import NavBar from './assets/components/NavBar'
import './App.css'
import Jumbotron from './assets/components/Jumbotron'
import BenefitSection from './assets/components/BenefitSection'
import ServiceSection from './assets/components/ServiceSection'
import RequirementSection from './assets/components/RequirementSection'
import Footer from './assets/components/Footer'
import FormSection from './assets/components/FormSection'

const syarats = [
  "Lorem ipsum dolor sit amet consect",
  "Lorem ipsum dolor sit amet consectur.",
  "Lorem ipsum dolor sit amet coctetur."
]

const reqs = [
  "Lorem ipsum dolor sit amet consectetur.",
  "Lorem ipsum dolor sit ametsectetur.",
  "Lorem ipsum dolor sit amconsectetur.",
  "Lorem ipsum dolor sit amet nsectetur.",
  "Lorem ipsum dolor sit consectetur."
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
        <FormSection />
      </main>
      <footer className='flex' id='kontak'>
        <Footer xUrl={'#'} ttUrl={'#'} ytUrl={'#'} igUrl={'#'} fbUrl={'#'}/>
      </footer>
    </>
  )
}

export default App
