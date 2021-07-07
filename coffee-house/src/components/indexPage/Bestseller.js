import React from 'react';
import '../general_css/style.scss'
import '../css/bootstrap-grid.min.css'
import '../css/bootstrap-reboot.min.css'
import { Link } from "react-router-dom";




const bestsellers =  [
  {
    name: "Solimo Coffee Beans 2 kg",
    id: 3,
    url: "https://images-na.ssl-images-amazon.com/images/I/815O9ktyfUL._SL1500_.jpg",
    price: "10.73$"
  },
  {
    name: "Presto Coffee Beans 1 kg",
    id: 5,
    url: "https://images-na.ssl-images-amazon.com/images/I/91Ryk2gKejL._SL1500_.jpg",
    price: "15.99$"

  },
  {
    name: "AROMISTICO Coffee 1 kg",
    id: 2,
    url: "https://images-na.ssl-images-amazon.com/images/I/71qBQnpQFYL._SL1500_.jpg",
    price: "6.99$"
  }
]


function Bestseller (){ 
  
  return (
    <>
    {
    bestsellers.map((bs)=>(
  <div className="cart">
        <Link to={`/coffee/${bs.id}`}>
        <img src={bs.url} alt={bs.name} className="coffee"></img>
        </Link>
        <div className="cart_text">{bs.name}</div>
        <div className="cart_price">{bs.price}</div>
        </div>
    ))
    }
    </>
  )
}


export default Bestseller;
