import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { TablePagination } from '@material-ui/core';

function Home() {
  const [user, setUsers] =useState([]);

//pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

//end pagination
useEffect(()=>{
LoadingData()

  },[])

  //validation
  

  const LoadingData= async()=>{
    const data=await axios.get("http://localhost:3000/user");
    console.log(data, "data")
    setUsers(data.data);
  }

  //delete
const Deleteuser=async(id)=>{
  await axios.delete(`http://localhost:3000/user/${id}`);
  LoadingData();
}

  return (
   <>
   <table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Contact</th>
      <th scope="col">Address</th>
  
      <th scope="col" style={{textAlign:"center"}}>Action</th>
    </tr>
  </thead>
  <tbody>
    {
      user?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item)=>(
        <tr key={item.id}>
        <th scope="row">{item.id}</th>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.contact}</td>
        <td>{item.address}</td>
        
        <td style={{textAlign:"center", justifyContent:'center', display:"flex"}}>
          <td><Link to={`user/${item.id}`} className="btn btn-primary">  
          <VisibilityIcon/>
          </Link></td>
         <td>
         <Link to={`user/edit/${item.id}`} className="btn btn-secondary">  
          <EditIcon/>
          </Link>
         </td>
          <td><Link to="" className="btn btn-danger" onClick={()=>Deleteuser(item.id)}>  
          <DeleteIcon/>
          </Link></td>
        </td>
      </tr>
      ))
    }
 

    
  </tbody>
</table>

<TablePagination style={{display:"flex", float:"right", marginLeft:"300px"}}
          rowsPerPageOptions={[3, 10, 25]}
          component="div"
          count={user ? user.length : 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
   </>
  );

}

export default Home