import React from 'react'
import { IoIosCloseCircleOutline, IoMdAdd } from "react-icons/io";
import './style.css'
const ImagePopUp = (props) => {
  return (
  props?.trigger && (
    <div className='popup'>
        <div className='PopUpInner'>
        <IoIosCloseCircleOutline
              onClick={() => props.setImagePopup(false)}
              className="close_btn"
            />

            <img src={props.image} alt="" className='popImage' />
        </div>

    </div>

  )
  )
}

export default ImagePopUp