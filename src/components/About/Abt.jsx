import React from 'react'

const Abt = (props) => {
  
  return (
              <div className="1 health-problem left">
                           <div className="icons"><i className={props.iconsclass}></i></div>
                           <div className="problem">{props.problem}</div>
                           <p className='text'>{props.text}</p>
                           <div className="btn">Learn More</div>
                     </div>
  )
}

export default Abt