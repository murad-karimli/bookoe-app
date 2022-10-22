import React,{useState} from 'react';
import logo from "../img/logo.png"
import{BsSearch}from "react-icons/bs"
import Modal from "../Modal/Modal";
import {FcGoogle} from "react-icons/fc"
import {AiOutlineApple,AiFillFacebook} from "react-icons/ai"

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
            <Modal title="Login or Sign Up" onClose={() => setShow(false)} show={show}>
            <p className="p-4">Daxil olmaq üçün ya yeni hesab yaradın ya da aşağıdakilar ilə davam edin</p>
          <form className="flex flex-col justify-center items-center">
          <p className="font-semibold">Google ilə daxil olmaq üçün</p>
            <button className="block p-4 bg-[#ccd] my-2 text-[#444] rounded w-[70%] text-center font-semibold">
              <FcGoogle className="inline mx-2" size={30} /> Google ilə davam et
            </button>
            <p className="font-semibold">Apple ilə daxil olmaq üçün</p>
            <button className="block p-4 bg-[#111] my-2 rounded w-[70%] text-center text-white font-semibold">
              {" "}
              <AiOutlineApple size={30} className="inline mx-2" /> Apple ilə
              davam et
            </button>
            <p className="font-semibold">Facebook ilə daxil olmaq üçün</p>
            <button className="block p-4 bg-[#46ff] my-2 text-white rounded w-[70%] text-center font-semibold">
              <AiFillFacebook size={30} className="fill-white inline mx-2" />{" "}
              Facebook ilə davam et
            </button>
            <p className="font-semibold">və ya e-poçt ilə daxil olun</p>
            <input
              className="block p-4 bg-[#ccc] my-2 rounded w-[70%] "
              placeholder="E-poçt"
            />
            <button className="block p-4 bg-[#08ff] text-[#fff] text-xl font-semibold my-2 rounded w-[70%] text-center">
              Növbəti
            </button>
          </form>
              </Modal>
      
            
            <button onClick={() => setShow(true)} className='bg-[#6C5DD3] text-white p-2 rounded-xl font-semibold mx-2 hover:opacity-80 transiton-all duration-700'>
                Sign in
            </button>
        </div>
    </nav>
  )
}

export default Navbar