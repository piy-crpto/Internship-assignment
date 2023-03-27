import React from 'react';
import Dummy from './Dummy';
import './Working.css';
export const Working = () => {
  return (
    
    <section className="program-workings" id="program-working">
            <div className="heading-part">
                    <div className="first-heading">How the Program Works</div>
                    <div className="line"></div>

            </div>

            <div className="working">
                   <div className="box  box1">
                              <div className="steps">step1</div>
                              <Dummy 
                                  imgageLink='Images/img41.jpg'
                                  heading='Connecting the
                                  medical history'
                                  about='On your diet,
                                  supplements, lifestyle,
                                
                                  '
                               />
                   </div>
                   <div className="box box2">
                             <div className="steps">step2</div>
                             <Dummy 
                                   imgageLink='Images/img42.jpeg'
                                   heading='Clarity Call'
                                   about='Have a call with us to
                                   know how we work. Make
                                   program payment. Start
                                   
                                   '
                             
                             />
                   </div>

                   <div className="box box3">
                               <div className="steps">step3</div>
                               <Dummy 
                                            imgageLink='Images/img43.jpg'
                                            heading='Connecting the
                                            medical history'
                                            about='Fill out a medical history
                                            form, do a blood test and
                                           
                                            '
                               />
                   </div>
                   <div className="box box4">
                              <div className="steps">step4</div>
                              <Dummy 
                                  imgageLink='Images/img44.jpg'
                                  heading='Follow Up Consults'
                                  about='Happen each month.
                                  Health progress
                                 
                                  
                                  Ask questions on chat/
                                 
                                  '
                               />
                   </div>


            </div>
    </section>

  )
}
