import Carousel from "../Components/Carousel";
import BestSeller from "../Components/BestSeller";
import About from "../Components/About";
import SpecialOffers from "../Components/SpecialOffers";
import FlashSale from "../Components/FlashSale";
import Timer from "../Components/Timer";



function HomePage({books}) {
  return (
    <div>
    
    <div className="flex justify-between mt-12">
    <Carousel images={books}/>
    <BestSeller images={books}/>
    </div>
    <About/>
    <SpecialOffers images={books}/>
    <div className="flex justify-center items-center flex-col">
        <h1 className="mb-4 text-4xl font-bold ">Flash Sale</h1>
        <p className="mb-16 text-xl font-semibold">Kompaniyalar davam edir qağaşş</p>
        <Timer initialHours={4} initialMinutes={35} initialSecond={45} />
    </div>
    <FlashSale images={books} />
    
   </div>  
  )
}

export default HomePage