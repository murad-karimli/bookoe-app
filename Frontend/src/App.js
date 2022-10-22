import Carousel from "./Components/Carousel";
import Navbar from "./Components/Navbar";
import{useState,useEffect} from "react"
import BestSeller from "./Components/BestSeller";
import About from "./Components/About";
import SpecialOffers from "./Components/SpecialOffers";


function App() {
  const[books,setBooks]=useState([])

  const fetchAll=async()=>{
    const data=await fetch("http://localhost:5000/api/v1/books");
    const json=await data.json();
    setBooks(json)
    console.log(books)
  }
 useEffect(()=>{
  fetchAll()
 },[])
  return (
    <div>    
     <Navbar/>
     <div className="flex justify-between mt-12">
     <Carousel images={books}/>
     <BestSeller images={books}/>
     </div>
     <About/>
     <SpecialOffers images={books}/>

     
    </div>  
  )
}

export default App;
