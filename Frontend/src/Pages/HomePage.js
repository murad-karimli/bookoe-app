import Carousel from "../Components/Carousel";
import BestSeller from "../Components/BestSeller";
import About from "../Components/About";
import SpecialOffers from "../Components/SpecialOffers";
import FlashSale from "../Components/FlashSale";



function HomePage({books}) {
  return (
    <div>
    
    <div className="flex justify-between mt-12">
    <Carousel images={books}/>
    <BestSeller images={books}/>
    </div>
    <About/>
    <SpecialOffers images={books}/>
    <FlashSale images={books} />
    
   </div>  
  )
}

export default HomePage