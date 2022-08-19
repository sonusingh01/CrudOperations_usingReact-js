import { Card } from '@material-ui/core';
import { Button } from '@mui/material';
import axios from 'axios'

import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function UserView() {
  const navigate=useNavigate()

  const [user,setUser]=useState({
    name:"",
    email:"",
    contact:"",
    address:"",
})

const {id}=useParams();
  console.log(user)
    const GetData= async()=>{
      const res= await axios.get(`http://localhost:3000/user/${id}`)
  
      console.log(res.data)
      setUser(res.data)
    }
    useEffect(()=>{
      GetData()
    },[])


  return (
    <div>
      <Button onClick={()=>navigate("/")}>Back</Button>
      
        <Card className='container'>
          <div style={{border:"1px solid res", display:"flex", flexDirection:"column", textAlign:"center"}}>
            <h3>{id}</h3>
            <h4>{user.name}</h4>
            <h4>{user.email}</h4>
            <h4>{user.contact}</h4>
            <h4>{user.address}</h4>
          </div>
        </Card>
    
    </div>
  )
}

export default UserView