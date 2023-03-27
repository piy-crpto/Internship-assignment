import React from 'react'

export const Phil = (props) => {
  return (
   <div className="parent">
        <div className="i-part"><img src={ props.imgageLink} alt="img21" srcset="" /></div>
        <div className="h-part">{props.heading}</div>
        <div className="a-part">{props.about}</div>
   </div>
  )
}
