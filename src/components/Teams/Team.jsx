import React from 'react'
 import ImageSlider from './ImageSlider';
import Slidepart1 from './Slidepart1';
import Slidepart2 from './Slidepart2';
import Slidepart3 from './Slidepart3';

// import Slidepart1 from './Slidepart1';
// import Slidepart2 from './Slidepart2';
// import Slidepart3 from './Slidepart3';

import './Team.css'

const Team = () => {

    const slides = [
        { url: "images/1add.png", title: "first" },
        { url: "images/2add.png", title: "second" },
        { url: "images/3add.png", title: "third" },
      
      ]
      
  return (
   <section id="teams5" className='team'>
            <div className='head-team'><h1>OUR TEAMS</h1></div>
       {/* <Slidepart1 /> */}
       
        <div className='imgSlider'>
          <ImageSlider slides={slides} />
      </div>

      <div className='three-slider'>
        <Slidepart1 />
        <Slidepart2 />
        <Slidepart3 />
      </div>

{/* <div className="member-content">


      <div className="upper">
                 <div className="h1">Your Expert Care Team</div>
                 <div className="h3">Finest care from our top care specialists</div>
      </div>
      <div className="lower">
                
                <div className="member1"></div>
                <div className="member2"></div>


      </div>


</div> */}
        
   </section>
  )
}

export default Team