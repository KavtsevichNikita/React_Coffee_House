import React from 'react'
import './pleasure.css'
import '../css/bootstrap-grid.min.css'
import '../css/bootstrap-reboot.min.css'
import '../general_css/style.scss'
import coffee from "./for_your_pleasure/coffee-839233_1920.jpg" 
import coffeeBeans from '../general_img/coffee-beans.png'
import beansDark from '../general_img/beans dark.png'
import footerBeans from '../general_img/footer_beans.png'
import {Link} from "react-router-dom";
import Goods from './Goods'
export default function Pleasure() {
    return (
        <div>
            <header className="pleasure_header">
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
            {/* Menu Burger*/}
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
          </div>
          <div className="subheader">
            <div className="pleasure_topic">For you pleasure</div>
          </div>
        </header>
        <div className="about_our_pleasure">
          <div className="container">
            <div className="about_our_goods">
              <div className="row">
                <div className="col">
                  <img src={coffee}alt="person" className="coffee_pleasure" />
                </div>
                <div className="col">
                  <div className="our_beans">About our goods</div>
                  <div className="footer_beans">
                    <span> <img src={beansDark} alt="Beans Dark" className="beans_dark" /></span>
                  </div>
                  <p className="our_beans_text">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br /><br />
                    Afraid at highly months do things on at. Situation recommend objection do intention<br />
                    so questions. <br />
                    As greatly removed calling pleased improve an.<br /> Last ask him cold feel<br />
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.</p>
                </div>
              </div>
            </div>
            <hr className="devider_line" />
          </div>                  
        </div> 
        {/* Разделитель */}
        {/* Cart */}
        {/* <div class="container">   */}
        <div className="cart_of_coffee_pleasure">
          <Goods/>
        </div>                             
        {/* </div> */}
        {/* *********** */}
        {/* Footer */}
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
