import Navbar from "./components/Navbar/navbar"
import Faq from"./components/AskQns/askQns"
import Footer from "./components/Footer/footer"
import Inst from"./components/TrustedInst/institute"
import Mentor from "./components/Mentor/mentor"
import Event from "./components/Event/event"
import PlacementRecord from"./components/Placement-Record/placement"
import Placement from "./components/Placement/placement"
import Programs from "./components/Programs/program"
import './App.css'


function App() {
  

  return (
    <> 
         <Navbar/>  
         <Inst/> 
         <PlacementRecord/>
         <Placement/>
         <Programs/>
         <Mentor/>  
         <Event/>         
         <Faq/> 
         <Footer/>  
    </>
  )
}

export default App
