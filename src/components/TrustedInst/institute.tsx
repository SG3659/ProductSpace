import"./institute.css"
import  Inst from"../../constants/Instimgindex"
const institute = () => {
  return (
   <div className="inst-container">
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



