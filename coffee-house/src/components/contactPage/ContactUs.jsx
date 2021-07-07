import React, { useEffect, useState } from 'react'
import './contactUs.css'
import '../general_css/style.scss'
import coffeeBeans from '../general_img/coffee-beans.png'
import beansDark from '../general_img/beans dark.png'
import '../css/bootstrap-grid.min.css'
import '../css/bootstrap-reboot.min.css'
import footerBeans from '../general_img/footer_beans.png'
import {Link} from "react-router-dom";
import ModalWindow from './ModalWindow';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import axios from "axios"


const ContactUs = () => {



const [, setValue] = useState()
const [, setName] = useState();
const [, setEmail] = useState();
const [, setMessage] = useState();
const [nameDirty, setNameDirty] = useState(false);
const [emailDirty, setEmailDirty] = useState(false);
const [MessageDirty, setMessageDirty] = useState(false);
const [NameError, setNameError] = useState("Введите имя");
const [EmailError, setEmailError] = useState("Email не может быть пустым");
const [MessageError, setMessageError] = useState("Введите сообщение");
const [formValid, setFormValid] = useState(false)
const [input,setInput] = useState({
    name:"",
    email:"",
    phone:"",
    message:"",
})
const blurHandler = (e) =>{
  switch(e.target.name) {
    case  "name":

        setNameDirty(true)
        break
    case "email":

        setEmailDirty(true)
        break
        
    case  "message":

        setMessageDirty(true)          
        break
  }
}


  



function handleClick(event) {
  event.preventDefault();
 
  const newUser = {
    name: input.name,
    email: input.email,
    phone: input.value,
    message: input.message,
  }


  axios.post("http://localhost:3001/contact", newUser)

     setModalActive(true)

}

const emailHandler = (e) => {

  setEmail(e.target.value)
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(String(e.target.value).toLowerCase())){
    setEmailError("Некорректный Email")
  } else{
    setEmailError("");
  }
  const {name,value} = e.target;

  setInput(prevInput =>{
    return{
      ...prevInput,
      [name]: value
    }
  })
}
const NameHandler = (e) => {
  
  setName(e.target.value)
  if (!e.target.value){
    setNameError("Введите имя")
  } else{
    setNameError("");
  }
  const {name,value} = e.target;

  setInput(prevInput =>{
    return{
      ...prevInput,
      [name]: value
    }
  })
}

const MessageHandler = (e) => {

  setMessage(e.target.value)
  if (!e.target.value){
    setMessageError("Введите сообщение")
  } else{
    setMessageError("");
  }
  const {name,value} = e.target;

  setInput(prevInput =>{
    return{
      ...prevInput,
      [name]: value
    }
  })
}


useEffect(() =>{
  if(EmailError || NameError || MessageError){
    setFormValid(false)
  } else {
    setFormValid(true)
  }
}, [EmailError,NameError,MessageError])


  const [modalActive, setModalActive] = useState(false)
    return (
        <div>
            <header className="contact_us">
          <div className="container">
            <div id="header" className="header_menu">
              <img src={coffeeBeans} alt="" className="beans_light" />
              <ul className="menu">
              <Link to="/"style={{ textDecoration: 'none' }}><li className="menu_item menu_link">Coffee house</li></Link>
              <Link to="/ourCoffee"style={{ textDecoration: 'none' }}><li className="menu_item menu_link">Our coffee</li></Link>
              <Link to="/pleasure"style={{ textDecoration: 'none' }}><li className="menu_item menu_link">For your pleasure</li></Link>
              <Link to="/contact"style={{ textDecoration: 'none' }}><li className="menu_item menu_link">Contact us</li></Link>
              </ul>
            </div>
            {/* Menu Burger */}
            <div id="header" className="hamburger-menu">
              <input id="menu__toggle" type="checkbox" />
              <label className="menu__btn" htmlFor="menu__toggle">
                <span />
              </label>
              <ul className="menu__box">
              <Link to="/"style={{ textDecoration: 'none' }}><li className="menu_item menu_link">Coffee house</li></Link>
              <Link to="/ourCoffee"style={{ textDecoration: 'none' }}><li className="menu_item menu_link">Our coffee</li></Link>
              <Link to="/pleasure"style={{ textDecoration: 'none' }}><li className="menu_item menu_link">For your pleasure</li></Link>
              <Link to="/contact"style={{ textDecoration: 'none' }}><li className="menu_item menu_link">Contact us</li></Link>
              </ul>
            </div>
          </div>
          <div className="subheader">
            <div className="pleasure_topic">Contact us</div>
          </div>
        </header>
        <div className="your_taste">
          <div className="container">
            <p className="tell_section">Tell us about your tastes</p>
            <div className="footer_beans">
              <span> <img src={beansDark}alt="Beans Dark" className="beans_dark" /></span>
            </div>
          </div>
        </div>
        {/*  */}
        {/*  */}


        
        <section className="section-form" method="post">
          <div className="row">
            <form method="post" action="#" className="contact-form">
              <div className="row">
                <div className="col span-1-of-3">
                  <label htmlFor="name">Name<span className="main_input">*</span></label>
                </div>
                <div className="col span-1-of-3">
                  {(nameDirty && NameError) && <div className="error_message">{NameError}</div>}
                  <input
                  onChange={e => NameHandler(e)}
                  onBlur = {e => blurHandler(e)} 
                  value={input.name}
                  type="text" 
                  name="name" 
                  id="name" 
                  placeholder="Your name" 
                  required 
                  />
                </div>
              </div>
              <div className="row">
                <div className="col span-1-of-3">
                  <label htmlFor="email">Email<span className="main_input">*</span></label>
                </div>
                <div className="col span-1-of-3">
                {(emailDirty && EmailError) && <div className="error_message">{EmailError}</div>}
                  <input 
                  onChange={e => emailHandler(e)}
                  onBlur = {e => blurHandler(e)}
                  value={input.email}
                  type="email" 
                  name="email" 
                  id="email" 
                  placeholder="Your email" />
                </div>
              </div>
              <div className="row">
                <div className="col span-1-of-3">
                  <label htmlFor="phone">Phone</label>
                </div>
                <div className="col span-1-of-3">
                  <PhoneInput 
                  className="input_phone"
                  value={input.value}
                  name="phone" 
                  id="phone"
                  onChange={setValue}
                  placeholder="Введите номер телефона" />
                </div>
              </div>
              <p className="message">Your message<span className="main_input">*</span></p>
            </form></div>
          <div className="col span-2-of-3">
          {(MessageDirty && MessageError) && <div className="error_message_text">{MessageError}</div>}
            <textarea 
            onChange={e => MessageHandler(e)}
            onBlur = {e => blurHandler(e)}
            value={input.message}
            name="message" 
            type="message"
            placeholder="Tell us" 
            />
          </div>
             <button disabled={!formValid} onClick = {handleClick}  type="submit button" className="send_us" >Send us</button>
             
           
        </section>
        
        <ModalWindow active={modalActive} setActive={setModalActive}/>  
        <footer>
          <div className="container">
            <img src={footerBeans} alt="" className="beans_light_footer" />
            <ul className="menu_footer">
              <Link to="/"style={{ textDecoration: 'none' }}><li className="menu_item menu_link">Coffee house</li></Link>
              <Link to="/ourCoffee"style={{ textDecoration: 'none' }}><li className="menu_item menu_link">Our coffee</li></Link>
              <Link to="/pleasure"style={{ textDecoration: 'none' }}><li className="menu_item menu_link">For your pleasure</li></Link>
              <Link to="/contact"style={{ textDecoration: 'none' }}><li className="menu_item menu_link">Contact us</li></Link>
            </ul>
            <div className="footer_beans">
              <span> <img src={beansDark} alt="Beans Dark" className="beans_dark" /></span>
            </div>
          </div>
        </footer>   
          
      </div>
    );
  }

  export default ContactUs;