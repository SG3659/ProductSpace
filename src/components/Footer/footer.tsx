import "./footer.css"
const footer = () => {
  return (
   <footer className="footer">
      <div className="footer-content">
          {/*left*/}
         <div className="brand-section">
               <h1>P<span className='logo-span'>_</span></h1>
               <h2>PRODUCT SPACE</h2>
               <p>A Great Place to Upskill</p> 
         </div>
            {/* right */}
         <div className='footer-links' >
         <div className='footer-column'>
            <p>Resources</p>
            <ul>
            <ul>
              <li>Terms and Conditions</li>
              <li>Privacy policy</li>
              <li>Refund policy</li>
              <li>Contact us</li>
            </ul>
            </ul>
         </div>
         <div className="footer-column">
            <p>Links</p>
            <ul>
              <li>Testimonials</li>
              <li>Events</li>
              <li>Blogs</li>
              <li>Become a Mentor</li>
            </ul>
         </div>

           
         </div> 
      </div>

    
      <div className="footer-text-container">
         
         <div className="footer-text-section">
            <p>Get the latest updates from Product Space</p>
         </div>
         
         <div className='footer-subscribe'>
            <form className="footer-subscribe-form">
                  <input
                     type="email"
                     placeholder="Email Address"
                     className="subscribe-input"
                  />
                  <button type="submit" className="subscribe-button">Subscribe&nbsp; +</button>
            </form>
               <div className='icon1 icon-common'>
               </div>
               <div className='icon2 icon-common'>
               </div>
         </div>
      </div>

      <div className='footer-heading'>
         <h1 >Product <span className="heading-span">Space</span></h1>
      </div>


    </footer>   

  )
}
export default footer
