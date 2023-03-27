import React from 'react'
import OurPhilosophy from './OurPhilosophy'
import { Phil } from './Phil'
import './Philosophy.css'
const Philosophy = () => {
  return (
    <>
   <section className="philosophy5" id="philosophy5">
       <div className="main-content">
        
       <div className="heading">
               <h1 className='head1'>We are hear to Serve People to Return Back to Health</h1>
               <h3 className='head2'>Our clients have seen</h3>
            </div>



            <div className="second-part1">
                <Phil  imgageLink = 'Images/img21.png'
                        heading = 'Upto 2-3 inch loss'
                        about = 'and reduction in bloodpressure medication'
                  />
                <Phil 
                     imgageLink = 'Images/img22.avif'
                     heading = 'Relief from hot flashes & mood swings'
                     about = 'and reduction in bloodpressure medication'
                />
                <Phil 
                       imgageLink = 'Images/img23.avif'
                       heading = 'Upto 2-3 inch loss'
                       about = 'and reduction in bloodpressure medication'
                />
              

        </div>



        <div className="second-part2">

       
        <Phil 
                imgageLink = 'Images/img24.avif'
                heading = 'Reversing diabetes naturally'
                about = 'and reduction in PCOD symptoms'
                
               



                />
                <Phil 
                   imgageLink = 'Images/img25.jpg'
                   heading = 'Up to 10 kgs weight loss and reduc'
                   about = 'after failed IUI and IVF cycles'
                
                />

</div>
        </div>

       
   </section>

  <OurPhilosophy/>
   </>
  )
}

export default Philosophy