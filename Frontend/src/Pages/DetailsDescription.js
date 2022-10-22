import React,{useState} from 'react';
import About from '../Components/About';
import FlashSale from '../Components/FlashSale';
import map from "../img/maps.png"

function DetailsDescription({images}) {
    const[count,setCount]=useState(0)
  return (
    <div>
        <section className='flex p-16'>
            <img className='w-64 h-72 rounded-xl'src={map} alt="image"/>
            <div className='mx-8'>
                <h1 className='font-bold text-3xl '>Name</h1>
                <p className='font-semibold'>lorem ipsum dolor sit amet sss  </p>
                <span className='block font-semibold' >$11.22</span>
                <div>
                    <button onClick={()=>{setCount(count-1)}} className="p-2 bg-[#ddd] rounded-xl px-8 text-[#999] text-3xl">-</button>
                    <span className='font-bold p-12 text-xl' >{count}</span>
                    <button onClick={()=>setCount(count+1)} className="p-2 bg-[#ddd] rounded-xl px-8 text-[#999] text-3xl" >+</button>
                    <button>Add to card</button>
                </div>
                <p>lorem ipsum dolor sit amet dorem ipsum dolor sit amet lorem ipsum dolor sit</p>
            </div>
        </section>
        <section>
            <h1>Details Product</h1>
            <span>book title : title</span>
            <span>book author : author</span>
            <span>book tags : tags</span>
            
        </section>
        <About/>
        <h1 className='text-4xl font-bold text-center'>Books on Sale</h1>
        <FlashSale images={images}/>
    </div>
  )
}

export default DetailsDescription