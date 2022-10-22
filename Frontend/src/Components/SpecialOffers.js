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
  function cut(number,text){
    return text.substring(0,number)+" ..."
  }
function SpecialOffers({images}) {
    const settings = {
        infinite: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
    autoplaySpeed: 4000,
    };
  return (
   <section>
    <h2 className="text-3xl font-semibold text-center p-4">Special Offers</h2>
    <div className='flex justify-between '>
    <div className="w-full h-[900px] m-2" >
		<Slider {...settings}>
            {images.map((item,index) => (
                <div key={index} className="w-[100px] rounded-xl mx-16 p-4 bg-[#ddd]  h-[500px]">
                <img src={item.image} className="w-full h-72 rounded-xl" alt={index} />
                <h4 className="font-semibold text-xl font-mono text-center">{item.name}</h4>
                {item.tags.map((it,index)=>{
                  return(
                    <span key={index} className="text-[#A066F0] font-bold p-4">{it+"  "}</span>
                    )
                })} 
                <p className="font-semibold mx-auto p-2">{cut(170,item.content)}</p>
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