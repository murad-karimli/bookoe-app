import Timer from './Timer'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
function FlashSale({images}) {
    const settings = {
        infinite: true,
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 3,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 4000,
        
        
    
    };
  return (
    <div className='text-center '>
        <div className="w-[99%] my-24 mx-auto " >
		<Slider {...settings}>
		{images.map((item,index) => (
			<div key={index} className=" mx-4 h-[350px] w-[90%] rounded-xl p-4 border-[1px] border-solid border-[#ddd] shadow-lg shadow-[#888]">
			<img src={item.image} className="w-[90%] h-56 mx-4" alt={index} />
            <h2 className='font-bold mt-2'>{item.name}</h2>
            {item.tags.map((it,index)=>{
                  return(
                    <span key={index} className="my-2 text-[#A066F0] font-bold p-4">{it+"  "}</span>
                    )
                })} 
                <span className='block font-semibold '>{item.price} $ </span>
			</div>
		))}
		</Slider>
	</div>
    </div>
  )
}

export default FlashSale