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

  return(

    
    <div className="userList">
    {users.map(user =>{
     
      <Table striped bordered hover className="userList">
  <thead> 
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Message</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="td">{user.name}</td>
      <td className="td">{user.email}</td>
      <td  className="td">{user.phone}</td>
      <td className="td">{user.message}</td>
    </tr>
  </tbody>
</Table> 
    }
  )
    }
  </div>
  )
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