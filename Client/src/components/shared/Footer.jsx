import { Facebook, Instagram, Linkedin } from 'lucide-react'
import React from 'react'
import northkartLogo from "./../../assets/logo/logo-color.png"


function Footer() {
  return (
    <div>
      <div className='md:grid md:grid-cols-4 bg-black text-white'>
<div className='md:grid md:grid-cols-1 md:mt-3 md:ml-4'>
  
<img src={northkartLogo} alt="" width="50%" />
<p>sdkfksfsdfl</p>
<div className='md:grid md:grid-cols-7 md:mt-3 md:ml-1 md:text-yellow-500 md:shadow-lg'>
<Facebook className='md:hover:md:text-yellow-200'/>
<Linkedin  className='md:hover:md:text-yellow-200'/>
<Instagram  className='md:hover:md:text-yellow-200'/>
</div></div>


<div className=''>
<h1 className='font-bold '>Company</h1>
<div className='md:grid  md:mt-3 md:ml-1 md:text-yellow-500 md:shadow-lg'>

<a href="">about</a>
<a href="">contact</a>
<a href="">support</a>
<a href="">careers</a>
</div>
</div>



<div>
<h1 className='font-bold '>Quick Links</h1>
<div className='md:grid  md:mt-3 md:ml-1 md:text-yellow-500 md:shadow-lg'>
<a href="">share Location</a>

<a href="">Order Tracking</a>
<a href="">Size guide</a>
<a href="">FAQ's</a>
</div></div>


<div>
<h1 className='font-bold '>Legal</h1>
<div className='md:grid  md:mt-3 md:ml-1 md:text-yellow-500 md:shadow-lg' >
<a href="">Terms & Conditions</a>
<a href="">Privacy Policy</a>
</div>
</div>



      </div>
    </div>
  )
}

export default Footer