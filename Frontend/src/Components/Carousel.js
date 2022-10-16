import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'

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
	<div className="w-[700px]" >
		<Slider {...settings}>
		{images.map((item,index) => (
			<div key={index} className="w-[200px] p-20">
			<img src={item.image} className="w-full h-96" alt={index} />
			</div>
		))}
		</Slider>
	</div>
	</>
)
}
export default ImageSlider;
