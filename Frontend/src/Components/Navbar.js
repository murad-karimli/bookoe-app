import React,{useState} from 'react';
import logo from "../img/logo.png"
import{BsSearch}from "react-icons/bs"
import Modal from "../Modal/Modal";

function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <nav className='flex justify-between p-8'>
        <img src={logo} alt="logo" className=' mx-8'/>
        
        <div className='flex'>
        <BsSearch  size={25} className='mx-2'/>
        <input placeholder='Search...' className='px-2 border-[1px] h-8 border-[#666] border-solid rounded-xl'/>
        </div>
        <div>
            <button onClick={() => setShow(true)} className='font-semibold mx-2'>
                Log In
            </button>
            <Modal title="Login or Sign Up" onClose={() => setShow(false)} show={show}/>
      
            
            <button onClick={() => setShow(true)} className='bg-[#6C5DD3] text-white p-2 rounded-xl font-semibold mx-2 hover:opacity-80 transiton-all duration-700'>
                Sign in
            </button>
        </div>
    </nav>
  )
}

export default Navbar