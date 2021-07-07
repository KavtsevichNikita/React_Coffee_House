import { useState } from "react";
import "./newProduct.css";
import ProductList from "../productList/ProductList";


export default function NewProduct() {

  const [file, setFile] = useState(null);
  const [name, setName] = useState();
  const [country, setCountry] = useState();
  const [descr, setDescr] = useState();
  const [price, setPrice] = useState();

  const selectFile = e =>{
    setFile(e.target.file)
  }
  const showNewProduct = () => {

  }
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
           type="file" 
           id="file" 
           onChange={selectFile}
           />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input 
          value={name}
          onChange={e =>{setName(e.target.value)}}
          type="text" 
          placeholder="Product name" 
          />
        </div>
        <div className="addProductItem">
          <label>Country</label>
          <input
           type="text" 
           value={country}
            onChange={e =>{setCountry(e.target.value)}}
           placeholder="Country" />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
           type="text" 
           placeholder="About product" />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input 
          type="text"
          value={price}
          onChange={e =>{setPrice(Number(e.target.value))}}
          placeholder="9.99$" />
        </div>
        <button className="addProductButton" onClick={showNewProduct()}>Create</button>
      </form>
    </div>
  );
}
