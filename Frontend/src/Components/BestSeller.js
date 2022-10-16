import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray", }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray" }}
        onClick={onClick}
      />
    );
  }
  
const BestSeller = ({images}) => {
const settings = {
	infinite: true,
	dots: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	lazyLoad: true,
	autoplay: true,
autoplaySpeed: 4000,
nextArrow: <SampleNextArrow />,
prevArrow: <SamplePrevArrow />
};
return (
	<>
	<div className="w-[250px] mt-[7%]" >
		<Slider {...settings}>
		{images.map((item,index) => (
			<div key={index} className="w-[250px] p-2">
			<img src={item.image} className="w-full h-96" alt={index} />
            <h3 className="text-center">{item.name}</h3>
            <span className="mx-24 font-semibold">{item.price} $</span>
			</div>
		))}
		</Slider>
	</div>
	</>
)
}
export default BestSeller;