import"./institute.css"
import  Inst from"../../constants/Instimgindex"
const institute = () => {
  return (
   <div className="container">
      <div className="trusted-section" >
         {/*left*/}
         
            <h1>Trusted by Students from</h1>
         
         {/*right */}
         
            <div className="img-section">
              <div className="inst-img">
              {Inst.map((img,index)=>(
                  <img
                  key={index} 
                  src={img.icon} alt="Institute"/>
               ))}
            </div> 
         
            
               
               
            </div>
      </div>
      
     
   </div>
   
  )
}

export default institute;


// width: Fill (985.9px)px;
// height: Hug (130px)px;
// max-width: var(--width1120);
// padding: 40px 0px 40px 0px;
// gap: 36px;
// opacity: 0px;

