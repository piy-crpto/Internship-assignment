import React from 'react'

const Dummy = (props) => {
  return (
   <div className="main-box">
             <div className="ipart"><img src={ props.imgageLink} alt="img21" srcset="" /></div>
             <div className="hpart">{props.heading}</div>
             <div className="apart">{props.about}</div>
   </div>
  )
}

export default Dummy



