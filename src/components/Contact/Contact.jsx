import React from 'react'
import './Contsct.css'
import {Link} from 'react-router-dom';
export const Contact = () => {
  return (
    
<section class="footer" id='contact5'>

<div class="box-container-main">

    <div class="box">
        <h3>Locations</h3>
        <Link to="#1" className='number'>India</Link>
        <Link href="#2" className='number'>Japan</Link>
        <Link href="#3" className='number'>Russia</Link>
        <Link href="#4" className='number'>USA</Link>
        <Link href="#5" className='number'>France</Link>
    </div>

    <div class="box">
        <h3>Quick links</h3>
        <Link href="#6" className='number'>Home</Link>
        <Link href="#7" className='number'>Work</Link>
        <Link href="#8"  className='number'>About</Link>
        <Link href="#9" className='number'>Member</Link>
        
        <Link href="#11" className='number'>Teams</Link>
    </div>

    <div class="box">
        <h3>Contact info</h3>
        <Link href="#12" className='number'>7755084404</Link>
        <Link href="#13" className='number'>9839880438</Link>
        <Link href="#14" className='number'>pish492@gmail.com</Link>
        <Link href="#15" className='number'>sur12@gmail.com</Link>
        <Link href="#16" className='number'>sonbhadra,231213</Link>
    </div>

    <div class="box">
        <h3>Follow us</h3>
        <Link href="#17" className='number'>Facebook</Link>
        <Link href="#18" className='number'>Twitter</Link>
        <Link href="#19" className='number'>Instagram</Link>
        <Link href="#20" className='number'>Linkedin</Link>
        <Link href="#17" className='number'>Facebook</Link>
    </div>

</div>

<div class="credit"> copyright @ 2023 by <span>Piyush Yadav</span> </div>
</section>
  )

}
