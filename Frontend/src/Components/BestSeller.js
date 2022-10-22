import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#111" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#111" }}
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
	<div className="w-[350px] mx-20  " >
		<Slider {...settings}>
		{images.map((item,index) => (
			<div key={index} className="w-[250px] p-2">
			<img src={item.image} className="w-full h-96" alt={index} />
            <h3 className="text-center font-bold">{item.name}</h3>
            <span className="mx-20 font-semibold">{item.price} $</span>
			</div>
		))}
		</Slider>
	</div>
	</>
)
}
export default BestSeller;
