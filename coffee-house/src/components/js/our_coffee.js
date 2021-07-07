import React from "react";
import { Link } from "react-router-dom";
import "../general_css/style.scss"


function CoffeeList ({ coffeeList }) {
        return (
        <>
          {
            coffeeList.map((coffee)=>(
              <div className="cart_of_coffee" data-category={coffee.data_category}>
                <Link to={`/coffee/${coffee.id}`}>
                  <img src={coffee.url} alt="coffee" className="coffee_picture"></img>
                </Link>
                <p className="coffee_name">{coffee.name}</p>
                <div className="country">{coffee.country}</div>
                <div className="price">{coffee.price}</div>
            </div>
            )) 
          }
        </>
      )
    } 

export default CoffeeList












// // Загрузка карточек из JSON
// };
// const cartOfCoffeeAll = document.getElementsByClassName('.cart_of_coffee_all');
//   loadCoffee().then(json =>{
//       json.coffee.forEach(coffee => {
//           cartOfCoffeeAll.insertAdjacentHTML(
//           'beforeend',
//           `
//           <div class="cart_of_coffee" data-category="${coffee.data_category}">
//                           <a href="./about_it.html#${coffee.id}"><img src="${coffee.url}" alt="coffee" class="coffee_picture"></a>
//                           <p class="coffee_name">${coffee.name}</p>
//                           <div class="country">${coffee.country}</div>
//                           <div class="price">${coffee.price}</div>
//                           </div>
//           `
//           )
//           })
//   });


  
// Filter//
// let filters = document.querySelectorAll('button[data-filter]');

// for (let filter of filters) {
// filter.addEventListener('click', function(e) {
//   e.preventDefault();

//   let categoryId = filter.getAttribute('data-filter');
//   let card = document.querySelectorAll('.cart_of_coffee');

//   card.forEach(function(c) {

//     if (categoryId === 'All') {
//       c.classList.remove('hide');
//     } else {
//       if ((c.getAttribute('data-category')) !== categoryId) {
//         c.classList.add('hide');
//       } else {
//         c.classList.remove('hide');
//       }
//     }

//     })

//   }); 
// }


// //Live Search//

// let cards = document.querySelectorAll('.cart_of_coffee')

// let search= document.querySelector('#searchBar').oninput = function() {
//   let value = this.value.trim();
//   let list = document.querySelectorAll('.coffee_name');

//   if (value) {
//     list.forEach(elem => {
//       if (elem.innerText.search(value) == -1) {
//         elem.parentNode.classList.add('hide');
//       }
//     });
//   } else {
//     list.forEach(elem => {
//       elem.parentNode.classList.remove('hide');
//     });
//   }
// }
