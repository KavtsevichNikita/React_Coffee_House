import "./userList.css";
import  React, {useEffect, useState } from "react";
import { Table } from 'react-bootstrap';


export default function UserList() {



  const [users, setUsers] = useState([{
      name: '',
      email: '',
      phone: '',
      message: '',
     }])


  useEffect(() =>{
      fetch("/users").then(res =>{
        if(res.ok) {
          return res.json()
        }
      }).then(jsonRes =>setUsers(jsonRes))
    })
    return <div className="container">
      <h1>USERS PAGE</h1>
      {users.map(user =>{
        <div>
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
        <h1>{user.message}</h1>
        </div>
      })}
    </div>
}






  // 

  // 
  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

  // const [data, setData] = useState(userRows);

    //   
    //     <div>
    //     <h1>{user.name}</h1>
    //     <h1>{user.email}</h1>
    //     <h1>{user.phone}</h1>
    //     <h1>{user.message}</h1>
    //    