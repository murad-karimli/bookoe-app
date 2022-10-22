import React from 'react'
import logo from "../img/logo.png"
import{RiInstagramLine} from "react-icons/ri"
import {FaFacebookF,FaYoutube,FaLinkedin,FaTwitter} from "react-icons/fa" 

function Footer() {
  return (
    <div className='flex justify-between'>
       <div>
       <img src={logo} alt="logo"/>
       <p className='w-72'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the</p>
       <h1 className='font-bold text-xl'>Follow Us</h1>
       <div className='flex'>
       <RiInstagramLine size={35} className="mx-2"/>
       <FaFacebookF size={35} className="mx-2"/>
       <FaYoutube size={35} className="mx-2"/>
       <FaLinkedin size={35} className="mx-2"/>
       <FaTwitter size={35} className="mx-2"/>
       </div>
       </div>
       <div>
        <h1>Book catgories</h1>
        <span className='block font-semibold'>Adventure</span>
        <span className='block font-semibold'>Fantastic</span>
        <span className='block font-semibold'>Science-fiction</span>
        <span className='block font-semibold'>Horror</span>
        <span className='block font-semibold'>Classic</span>
       </div>
       <div>
        <h1>Quick Links</h1>
        <span className='block font-semibold'>About Us</span>
        <span className='block font-semibold'>Contact us</span>
        <span className='block font-semibold'>Products</span>
        <span className='block font-semibold'>Login</span>
        <span className='block font-semibold'>Sign up</span>
       </div>
       <div>
        <h1>Our Store</h1>
        <img/>
       </div>
    </div>
  )
}

export default Footer