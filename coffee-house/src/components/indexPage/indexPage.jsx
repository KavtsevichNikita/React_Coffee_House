import React from 'react'
import "./indexPage.css"
import '../css/bootstrap-grid.min.css'
import '../css/bootstrap-reboot.min.css'
import coffeeBeans from '../general_img/coffee-beans.png'
import beansLight from '../general_img/beans_light.png'
import beansDark from '../general_img/beans dark.png'
import footerBeans from '../general_img/footer_beans.png'
import '../general_css/style.scss'
import {Link} from 'react-router-dom';
import Bestseller from './Bestseller'






export default function indexPage() {


    return (
        <div>
            <header>
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
          </div>
          <div className="subheader">
            <div className="about_coffee">Everything You Love About Coffee</div>
            <div className="block">
              <span> <img className="beans" src={beansLight} alt="beans" /> </span>
            </div>
            <div className="subheader_text">We makes every day full of energy and taste</div>
            <div className="subheader_question">Want to try our beans?</div>
            <div className="btn_wrap">
            <Link to="/ourCoffee"style={{ textDecoration: 'none' }}><button className="more">More</button></Link>
            </div>
          </div>
        </header>
        {/* ***************** */}
        {/* About Us Section */}
        <div className="about_us">
          <div className="container">
            <div className="row" />
            <div className="about_us_topic">About Us</div>
            <div className="block_dark">
              <span> <img className="beans_dark" src={beansDark} alt="beans dark" /> </span>
            </div>
            <p className="about_us_text">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
              Afraid at highly months do things on at. Situation recommend objection do intention
              so questions. As greatly removed calling pleased improve an. Last ask him cold feel
              met spot shy want. Children me laughing we prospect answered followed. At it went
              is song that held help face.<br />
              <br />
              Now residence dashwoods she excellent you. Shade being under his bed her, Much
              read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
              horrible but confined day end marriage. Eagerness furniture set preserved far
              recommend. Did even but nor are most gave hope. Secure active living depend son
              repair day ladies now.</p>
          </div>
        </div>
        {/***********  */}
        {/* BestSellers Section */}
        <div className="our_best">
          <div className="our_best_topic">Our best</div>
          <div className="all_cart">

      <Bestseller/>
          </div>   
        </div>   
        {/********************/}
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
          <div>
          </div>
        </footer>
      </div>
    );
  }
    

