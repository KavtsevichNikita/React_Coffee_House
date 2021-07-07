import React, {useState} from 'react'
import './our_coffee.css'
import '../general_css/style.scss'
import coffeeBeans from '../general_img/coffee-beans.png'
import beansDark from '../general_img/beans dark.png'
import person from "./our_coffee_page/person.png"
import '../css/bootstrap-grid.min.css'
import '../css/bootstrap-reboot.min.css'
import footerBeans from '../general_img/footer_beans.png'
import {Link} from "react-router-dom";
import { coffee } from './dataFile'
import CoffeeList from '../js/our_coffee'


export default function Our_coffee() {
    const [filter, setFilter] = useState('All')
    const [search, setSearch] = useState('')
    const filtred = coffee.filter((bs) => {
      const isCoresponding = bs.name.search(search) !== -1
      if (filter === 'All' && isCoresponding) return true
      if (filter.toLowerCase() === bs.country.toLowerCase() && isCoresponding) return true

      return false
    })
    const categories = ['All', 'Brazil', 'Kenya', 'Columbia']

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
          </div>
          <div className="subheader">
            <div className="our_coffee_topic">Our coffee</div>
          </div>
        </header>
        <div className="about_our_beans">
          <div className="container">
            <div className="row">
              <div className="col">
                <img src={person} alt="person" className="person" />
              </div>
              <div className="col">
                <div className="our_beans">About our beans</div>
                <div className="footer_beans">
                  <span> <img src={beansDark}alt="Beans Dark" className="beans_dark" /></span>
                </div>
                <p className="our_beans_text">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br /><br />
                  Afraid at highly months do things on at. Situation recommend objection do intention<br />
                  so questions. <br />
                  As greatly removed calling pleased improve an.<br /> Last ask him cold feel<br />
                  met spot shy want. Children me laughing we prospect answered followed. At it went
                  is song that held help face.</p>
              </div>
            </div>
            <hr className="devider_line" />
          </div>                  
        </div>           
        {/*  */}
        <div className="Searching">
          <div className="container">  
            <div className="search_content">
              <p className="looking_for">Lookiing for</p>
              <div id="searchWrapper"> 
                <form>
                  <p className="search_form">  
                    <input value={search} 
                      onChange={(e) => setSearch(e.target.value)}  
                      type="search" 
                      name="q"
                      placeholder="start typing here..."
                      id="searchBar" 
                    />
                  </p>
                </form>
              </div>
              <div className="text">Or filter</div>
              <div className="buttons">
                {
                  categories.map((cat) => (
                    <button 
                      className="button_coffee"
                      onClick={() => setFilter(cat)}
                    >
                      {cat}
                    </button>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
        {/* Cards Coffee */}
        <div className="container">  
          <div className="cart_of_coffee_all">
            <CoffeeList coffeeList={filtred} />
          </div>
        </div>
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
