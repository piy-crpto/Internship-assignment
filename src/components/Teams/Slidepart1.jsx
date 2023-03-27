import React from 'react'
import './Slidepart1.css'
const Slidepart1 = () => {

     const slidesStyle = {
    
     fontSize:'1rem',
    
     maxWidth: '25rem',
   

  };

  const slidesStyle2 = {
    
    
   
    display: 'flex',
    
   justifyContent: 'center',
   alignItems: 'center',
   flexDirection: 'column',
   maxWidth:'400px'
  

 };
  return (
    <section className='slide-part'>
                         <div className="content">
                                <div className="image-section imgtag32">
                                      <img src="Images/img51.jpg" alt="cheeseimg" srcset="" className='imgtag '/>
                                      
                                </div>
                               <div className="write-section" style={slidesStyle2}>

                                        <div className="head-part">DEEPTA MANOHAR
                                                  TRANSFORMATION STORIES</div>
                                          <div className="about-part special-font" style={slidesStyle}>
                                                  I was Suffering from digestion issues from past 5 years faced, acidity,
                                                  bloating along with digestion issues, I had hair fall and acne problem
                                                  which gave me stress and anxiety and frequently used to suffer from
                                                   fever So in January 3rd week of this I started taking treatment from
                                                   Deepta. After Starting the treatment, I slowly started recovering from
                                                   digestive issues that too without medicines from past few years I was
                                                  under ayurvedic medicines for digestion. It was very difficult for me to
                                                  I was Suffering from digestion issues from past 5 years faced, acidity,
                                                  bloating along with digestion issues, I had hair fall and acne problem
                                                  which gave me stress and anxiety and frequently used to suffer from
                                                   fever So in January 3rd week of this I started taking treatment from
                                                   Deepta. After Starting the tr.
.
                                          </div>
                                        
                               </div>
                  </div>

                  <div className="social-icons">
                                         <div> <i class="fa-brands fa-linkedin-in"></i>    </div>
                                         <div> <i class="fa-brands fa-facebook-f  special-class"></i>   </div>
                                         <div> <i class="fa-brands fa-instagram"></i></div>
               
                       
                 </div>
    </section>


 
  )
}

export default Slidepart1