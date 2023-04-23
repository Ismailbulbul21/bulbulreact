import React from 'react'
import './bulbul.css'
import img1 from "./sawiro/casual-life-3d-girl-with-tablet-and-working-process-on-desktop.png"
import {useState} from 'react'


export const Bulbul = () => {

const [change ,setChange]=useState(false)

const handleChange = ()=>{

setChange(!change)

}


  return (
    <div className='container'>

     <div className='upchild'>   
<div className='child'>

<a href='#' className='logo'>BULBUL</a>
       <ul>

<li><a href='#'>Homo</a></li>

<li><a href='#'>About</a></li>

<li><a href='#'>Project</a></li>


       </ul>


        </div>

        </div>

<div className='main'>

<img  src={img1}  alt='img1'/>


<div className='main2' >

<h1>Welcom To Bulbul  online <br/> Courses . </h1>

{
change && (

<p>We have best courses for you to become one of the best <br/> frontend developer in 6 month</p>



)

}

<button className='buutton1' onClick={handleChange}>See More</button>



</div>






</div>









    </div>
  )
}
