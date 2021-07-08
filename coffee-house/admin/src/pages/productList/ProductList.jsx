import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Coffee } from "../../dummyData";
import { Link } from "react-router-dom";
import React, {useEffect, useState } from "react";
import { Table } from 'reactstrap';

export default function ProductList() {

    const [products, setProducts] = useState([{
      file:'',
      name: '',
      country:'',
      descr: '',
      price: ''
    }])

    useEffect(() =>{
      fetch("/productsList").then(res =>{
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
    { field: "id", headerName: "ID", width: 110 },
    
    {
      field: "Product",
      headerName: "Product",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            {params.row.name}
          </div>
        );
      },
    },
    { field: "country", headerName: "Country", width: 200,},
    {
      field: "description",
      headerName: "Description",
      width: 200,
    },
    {
      field: "price",
      headerName: "Price",
      width: 130,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
            
          </>
        );
      },
    },
    {
      field: "New Product",
      headerName: "New Product",
      width: 180,
      renderCell: (params) => {
        return (
          <>
            <Link to="/newproduct" style={{ textDecoration: 'none' }}>
          <button  className="productAddButton">Create</button>
        </Link>
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        checkboxSelection
      />
    </div>
  );


  return <div className="productList">
    
    {
      products.map(products =>{
        <div>
        <h1>{products.file}</h1>
        <h1>{products.name}</h1>
        <h1>{products.country}</h1>
        <h1>{products.descr}</h1>
        <h1>{products.price}</h1>
        </div>
      })
    }
  </div>
}
