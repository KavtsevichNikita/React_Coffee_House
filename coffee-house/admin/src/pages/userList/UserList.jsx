import "./userList.css";
import  React, {useEffect, useState } from "react";
import { Table } from 'react-bootstrap';
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Coffee } from "../../dummyData";
import { Link } from "react-router-dom";

export default function UserList() {

      const [products, setProducts] = useState([{
        file:'',
        name: '',
        country:'',
        descr: '',
        price: ''
      }])
  
      useEffect(() =>{
        fetch("/contact").then(res =>{
          if(res.ok) {
              return res.json()
          }
        }).then(jsonRes => setProducts(jsonRes))
      })
  
    const [data, setData] = useState(Coffee);
  
    const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
    };
  
  
   
    const columns = [
      { field: "id", width: 110 },
      {
        field: "Name",
        width: 200,
       
      },
      {
        field: "Email",
        width: 250,
        
      },
      { field: "Phone", headerName: "Phone", width: 200,},
      {
        field: "Message",
        width: 330,
      }
    ];
  
    return (
      <div className="productList">
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={15}
          checkboxSelection
        />
         {/* {
        products.map(products =>{
         return <div>
          <h1>{products.file}</h1>
          <h1>{products.name}</h1>
          <h1>{products.country}</h1>
          <h1>{products.descr}</h1>
          <h1>{products.price}</h1>
          </div>
        })
      } */}
      </div>
    ); 
  }
  