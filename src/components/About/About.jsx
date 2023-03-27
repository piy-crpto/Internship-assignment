import React from 'react'
import './About.css'

import Abt from './Abt';
const About = () => {
  return (
   <>
<section id='about5' className='about5'>
  <div className="main-content">

   <div className="heading">
      <h1 className='head1'>Our Programs</h1>
   <h3 className='head2'>Return to Healthy</h3>
  </div>

     <div className="second-part">

     <div className="medical-icons">

      <Abt   iconsclass="fa fa-stethoscope"
          problem="Blood Pressure"
           text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aut repudiandae repellat quo. Excepturi mollitia reprehenderit, molestias officia harum nobis"

      / >


   <Abt   iconsclass="fa fa-medkit"
          problem="Weight Loss"
           text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aut repudiandae repellat quo. Excepturi mollitia reprehenderit, molestias officia harum nobis"

      / >
                 
                 

                     
          </div>
          
          <div className="medical-icons">



          <Abt   iconsclass="fa fa-plus-square"
          problem="Blood Pressure"
           text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aut repudiandae repellat quo. Excepturi mollitia reprehenderit, molestias officia harum nobis"

      / >


   <Abt   iconsclass="fa fa-user-md"
          problem="Weight Loss"
           text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aut repudiandae repellat quo. Excepturi mollitia reprehenderit, molestias officia harum nobis"

      / >


                   
                      
          </div>


          <div className="medical-icons">



          <Abt   iconsclass="fa fa-ambulance"
          problem="Menupase"
           text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aut repudiandae repellat quo. Excepturi mollitia reprehenderit, molestias officia harum nobis"

      / >


   <Abt   iconsclass="fa fa-wheelchair"
          problem="Thyroid"
           text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aut repudiandae repellat quo. Excepturi mollitia reprehenderit, molestias officia harum nobis"

      / >
                  
                    
          </div>


         

         
     </div>

  </div>
 
  
   
   
  </section>
   </>
  )
}

export default About;