import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./Modal.css";
import {VscChromeClose} from "react-icons/vsc"
import {FcGoogle} from "react-icons/fc"
import {AiOutlineApple,AiFillFacebook} from "react-icons/ai"
const Modal = props => {
  const closeOnEscapeKeyDown = e => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal" onClick={props.onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header flex justify-between ">
            <h4 className="modal-title ">{props.title}</h4>
            <button onClick={props.onClose} className="button">
              <VscChromeClose size={25}/>
            </button>
          </div>
          <div className="modal-body">{props.children}
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
          </form></div>
          <div className="modal-footer">
            
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

export default Modal;
