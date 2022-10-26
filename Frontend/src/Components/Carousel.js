import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import{Link}from "react-router-dom"
const ImageSlider = ({images}) => {
const settings = {
	infinite: true,
	dots: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	lazyLoad: true,
	autoplay: true,
autoplaySpeed: 4000,

};
return (
	<>
	<div className="w-[700px] mx-12" >
		<Slider {...settings}>
		{images.map((item,index) => (
			<Link to={`/about/:${item._id}`} key={index} className="w-[200px] ">
			<img src={item.image} className="w-full h-96" alt={index} />
			</Link>
		))}
		</Slider>
	</div>
	</>
)
}
export default ImageSlider;
