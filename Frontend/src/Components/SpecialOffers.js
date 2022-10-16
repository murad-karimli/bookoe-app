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
function SpecialOffers({images}) {
    const settings = {
        infinite: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
    };
  return (
   <section>
    <h2 className="text-3xl font-semibold text-center p-4">Special Offers</h2>
    <div className='flex justify-between '>
    <div className="w-full h-[900px]" >
		<Slider {...settings}>
            {images.map((item,index) => (
                <div key={index} className="w-[150px] rounded-xl  p-4 bg-[#ddd]  h-[700px]">
                <img src={item.image} className="w-full h-96 rounded-xl" alt={index} />
                <h4 className="font-semibold text-xl text-center">{item.name}</h4>
                <span className="text-[#A020F0] font-semibold p-4">{item.tags} </span>
                <p className="font-semibold mx-auto p-2">{item.content}</p>
                </div>
            ))}
		</Slider>
	</div>
    </div>
   </section>
  )
}

export default SpecialOffers
    // <Slider {...settings}>
    // {
        
    //     images.map((book,index)=>{

    //         return(
    //             <div key={index} className="h-64 w-72">
    //                 <img src={book.image} alt={index}/>
    //                 <h4>{book.name}</h4>
    //                 <p>{book.description}</p>
    //             </div>
    //         )
    //     })
        
    // }
    // </Slider>