import Navbar from "./components/Navbar/navbar"
import Faq from"./components/AskQns/askQns"
import Footer from "./components/Footer/footer"
import Inst from"./components/TrustedInst/institute"
import Mentor from "./components/Mentor/mentor"
import Event from "./components/Event/Event"
import './App.css'

function App() {
  

  return (
    <> 
         <Navbar/>  
         <Inst/> 
         <Mentor/>
         <Event/>
         <Faq/> 
        <Footer/>   
    </>
  )
}

export default App
