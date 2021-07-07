import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Coffee } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductList() {
  const [data, setData] = useState(Coffee);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };


 
  const columns = [
    { field: "id", headerName: "ID", width: 110 },
    {
      field: "Url",
      headerName: "Image",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.url} alt="" />
          </div>
        );
      },
    },
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
}
