import React from 'react'
import './contactUs.css'
import '../general_css/style.scss'
import thankYou from './contact_us/Group.png'
import backArrow from './contact_us/back-arrow.png'
import '../css/bootstrap-grid.min.css'
import '../css/bootstrap-reboot.min.css'


const  ModalWindow = ({active, setActive}) => {

const newMessage = (item) =>{ 
    item.preventDefault();
    window.location.reload();
    setActive(false)
    
}
    return (
        <div>
            <div className={ active ? "modal active" : "modal"} onClick={() => setActive(false)}>
                <div className="modal_content" onClick={e => e.stopPropagation()}>
          <div className="container">
            <div className="feedback_message">Thank you so much <br /> We contact you as soon as posible</div>
            <img src={thankYou} alt="Thank you" className="thank_you_image" />
         <button className="another_message"onClick={newMessage}>Another ? <img src={backArrow} alt="back-arrow" className="back-arrow" /> </button> 
          </div>
        </div>
        </div>
        </div>
    )
}


export default ModalWindow;