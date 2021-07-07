import React from 'react';
import '../general_css/style.scss'
import '../css/bootstrap-grid.min.css'
import '../css/bootstrap-reboot.min.css'


 const goods =  [
    {
      "name": "Electric Spice and Coffee Grinder",
      "url": "https://images-na.ssl-images-amazon.com/images/I/41qvqWRCm3L.jpg",
      "price": "36.99$"
    },
    {
      "name": "Manual Coffee Grinder",
      "url": "https://images-na.ssl-images-amazon.com/images/I/91gR5HFtmaL._SL1500_.jpg",
      "price": "25.99$"
    },
    {
      "name": "Coffee Cup with Lid",
      "url": "https://images-na.ssl-images-amazon.com/images/I/71L5Ut1HHSL._SL1500_.jpg",
      "price": "15.99$"
    },
    {
      "name": "Pour Over Coffee Maker",
      "url": "https://images-na.ssl-images-amazon.com/images/I/916TPwGqfML._SL1500_.jpg",
      "price": "45.99$"
    }
  ]

  function Goods (){ 
  
    return (
      <>
      {
      goods.map((goodss)=>(
    <div className="card_pleasure"> {goods.id}
          <img src={goodss.url} alt={goods.name}  className="coffee"></img>
          <div className="cart_text">{goodss.name}</div>
          <div className="cart_price">{goodss.price}</div>
          </div>
      ))
      }
      </>
    )
  }
  
  
  export default Goods;