import React from 'react'
import '../general_css/style.scss'
import coffeeBeans from '../general_img/coffee-beans.png'
import beansDark from '../general_img/beans dark.png'
import '../css/bootstrap-grid.min.css'
import '../css/bootstrap-reboot.min.css'
import footerBeans from '../general_img/footer_beans.png'
import { coffee } from '../our_coffee/dataFile'
import {Link} from "react-router-dom";

export default function About_it({match}) {
    const { id } = match.params
    const currentCoffee = coffee.find((c) => c.id.toString() === id);
    return (
        <div>
            <header className="our_coffee">
          <div className="container">  
            <div className="header_menu">
              <img src={coffeeBeans} alt="" className="beans_light" />
              <ul className="menu">
              <Link to="/"style={{ textDecoration: 'none' }}><li className="menu_item menu_link">Coffee house</li></Link>
              <Link to="/ourCoffee"style={{ textDecoration: 'none' }}><li className="menu_item menu_link">Our coffee</li></Link>
              <Link to="/pleasure"style={{ textDecoration: 'none' }}><li className="menu_item menu_link">For your pleasure</li></Link>
              <Link to="/contact"style={{ textDecoration: 'none' }}><li className="menu_item menu_link">Contact us</li></Link>
              </ul>
            </div>
            {/* Menu Burger */}
            <div className="hamburger-menu">
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
            <div className="subheader">
              <div className="our_coffee_topic">Our Coffee</div>
            </div>
          </div>
        </header>
        <div className="about_it_section"> 
          <div className="container">
          <div className="row">
              <div className="col">
                  <img src={currentCoffee.url} alt="person" className="coffee_section"/>
              </div>
              <div className="col">
                  <div className="our_beans">About it</div>
                  <div className="footer_beans">
                      <span> 
                        <img src={beansDark} alt="Beans Dark" className="beans_dark"/>
                      </span>
                  </div>
                <p><b>Country: </b>{currentCoffee.country}</p>
                <p className="description"><b>Description: </b> {currentCoffee.description}</p>
                <div className="coffee_price">Price: <span className="price_span"> {currentCoffee.price}</span>  
              </div>
            </div>
           </div>          
        </div> 
        </div>
        <footer>
          <div className="container">
            <img src={footerBeans} alt="" className="beans_light_footer" />
            <ul className="menu_footer footer_about_it">
              <Link to="/"style={{ textDecoration: 'none' }}><li className="menu_item menu_link">Coffee house</li></Link>
              <Link to="/ourCoffee"style={{ textDecoration: 'none' }}><li className="menu_item menu_link">Our coffee</li></Link>
              <Link to="/pleasure"style={{ textDecoration: 'none' }}><li className="menu_item menu_link">For your pleasure</li></Link>
              <Link to="/contact"style={{ textDecoration: 'none' }}><li className="menu_item menu_link">Contact us</li></Link>
            </ul>
            <div className="footer_beans">
              <span> <img src={beansDark} alt="Beans Dark" className="beans_dark" /></span>
            </div>
          </div>
          <div>
          </div>
        </footer>
      </div>
    );
  }