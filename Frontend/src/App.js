import Navbar from "./Components/Navbar";
import { useState, useEffect } from "react"
import Footer from "./Components/Footer";
import DetailsDescription from "./Pages/DetailsDescription";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";

function App() {
  const [books, setBooks] = useState([])
  const fetchAll = async () => {
    const data = await fetch("http://localhost:5000/api/v1/books");
    const json = await data.json();
    setBooks(json)
    console.log(json)
  }
  useEffect(() => {
    fetchAll()
  }, [])
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage books={books} />} />
        <Route path="/about/:id" element={<DetailsDescription images={books} />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
