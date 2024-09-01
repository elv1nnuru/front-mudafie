import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css'
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import Kartlar from './components/Kartlar'
import About from './components/About'
import Feature from './components/Feature'
import Services from './components/Services'
import Teams from './components/Teams'
import Consultation from './components/Consultation'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <Navbar/>
      <Introduction/>
      <Kartlar/>
      <About/>
      <Feature/>
      <Services/>
      <Teams/>
      <Consultation/>
      <Footer/>
        
    </>
  )
}

export default App
