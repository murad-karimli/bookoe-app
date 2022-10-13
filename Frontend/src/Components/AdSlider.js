import React from 'react'
import Slider from "react-slick";
import { useEffect,useState,useRef } from 'react';
import{AiOutlineArrowRight,AiOutlineArrowLeft}from "react-icons/ai"

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1500,
  autoplaySpeed: 3000,
  cssEase: "linear",
  slidesToShow: 6.1,
  slidesToScroll: 2,
  initialSlide: 0,
  arrows: false,
};

function AdSlider() {

    const[books,setBooks]=useState([])
    const carouselRef = useRef(null);

    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
      <AiOutlineArrowRight {...props} />
    );
  
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
      <AiOutlineArrowRight {...props} />
    );
  const fetchAll=async()=>{
    const data=await fetch("http://localhost:5000/api/v1/books")
    const json=await data.json();
    setBooks(json)
  }
  useEffect(()=>{
    fetchAll()
  },[])
  return (
    <div className='w-[750px] '>
        <Slider {...settings}>
            {books.map((book,index)=>{
             return(
                <img src={book.image} className="h-[600px] rounded-xl" alt={index} key={index}/>
             )
            })} 
        </Slider>
        <button onClick={() => carouselRef.current.slickPrev()}>
            <AiOutlineArrowLeft/>
        </button>
        <button onClick={() => carouselRef.current.slickNext()}>
            <AiOutlineArrowRight/>
        </button>
    </div>
  )
}

export default AdSlider