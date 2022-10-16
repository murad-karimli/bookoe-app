import React from 'react'
import icon1 from "../img/icon.png"
import icon2 from "../img/icon2.png"
import icon3 from "../img/icon3.png"
import icon4 from "../img/icon4.png"

function About() {
  return (
    <section className="flex justify-between p-8" >
    <div className="flex justify-center items-center">
        <div className=" flex justify-center items-center w-28"><img className='' src={icon1} alt="1"/></div>
        <div className="bg-[#ddd] p-2 rounded-xl">
            <h3 className='font-bold'>Quick Delivery</h3>
            <p className='font-semibold '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        </div>
    </div>
    <div className="flex justify-center items-center"> 
        <div className=" flex justify-center items-center w-28"><img src={icon2} alt="2"/></div>
        <div className="bg-[#ddd] p-2 rounded-xl">
            <h3 className='font-bold'>Secure Payment</h3>
            <p className='font-semibold '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, dicta.</p>
        </div>
    </div>
    <div className="flex justify-center items-center">
        <div className=" flex justify-center items-center w-28"><img src={icon3} alt="3"/></div>
        <div className="bg-[#ddd] p-2 rounded-xl">
            <h3 className='font-bold'>Best Quality</h3>
            <p className='font-semibold '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempora est quaerat.</p>
        </div>
    </div>
    <div className="flex justify-center items-center">
        <div className=" flex justify-center items-center w-28"><img src={icon4} alt="4"/></div>
        <div className="bg-[#ddd] p-2 rounded-xlfoot-con">
            <h3 className='font-bold'>Return Guarantee</h3>
            <p className='font-semibold '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora eum autem iste!</p>
        </div>
    </div>
</section>
  )
}

export default About