import Carousel from "./Components/Carousel";
import Navbar from "./Components/Navbar";
import{useState,useEffect} from "react"
import BestSeller from "./Components/BestSeller";
import About from "./Components/About";
import SpecialOffers from "./Components/SpecialOffers";
import FlashSale from "./Components/FlashSale";
import Footer from "./Components/Footer";
import DetailsDescription from "./Pages/DetailsDescription";
import Timer from "./Components/Timer";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";

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
      <Routes>
        <Route path="/" element={<HomePage books={books}/>}/>
        <Route path="/about" element={<DetailsDescription/>}/>
      </Routes>
     <Footer/>
     <DetailsDescription images={books}/>
    </div>  
  )
}

export default App;
