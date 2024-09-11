import axios from 'axios';
import React from 'react';
import './display.css';
import { useEffect, useState } from 'react';
import { Link,useParams, useNavigate } from 'react-router-dom';

function Display(){
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get("https://curd-backed-mysql.onrender.com/").then((res)=>{
            setData(res.data);
        })
    },[])
    console.log(data);


    const navigate = useNavigate();

   const handlDeletle = (id)=>{
    
    axios.delete(`https://curd-backed-mysql.onrender.com//Delete/${id}`).then((res)=>{
        console.log(res);
        window.location.reload();
        navigate('/');
    }).catch((err)=>{
        console.log(err);
    })
    
   }



  
       
   













    return(
        <div className='m-lg-4 mt-3 bg'>
            <div className='d-flex justify-content-center align-items-center'>
                <h1>CRUD OPERATION</h1>
            </div>'
            <table className='table table-dark table-striped'>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>PhNum</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((user)=>{
                            return(
                                <tr key={user.id}>
                                    <td>{user.FirstName}</td>
                                    <td>{user.LastName}</td>
                                    <td>{user.Age}</td>
                                    <td>{user.PhNum}</td>
                                    <td>{user.Email}</td>
                                    <td >
                                        <button onClick={e => handlDeletle(user.id)} className='btn btn-danger'>Delete</button>
                                        <Link to={`Update/${user.id}`} className='btn btn-success ms-2'>Update</Link>
                                        <Link to={`View/${user.id}`} className='btn btn-primary ms-2'>View</Link>
                                        
                                        
                                        </td>
                                </tr>
                            )
                        })

                    }
                    
                </tbody>




            </table>

            <Link to='/create' className='btn btn-success'>Create</Link>



        </div>
    )
    
}
export default Display;
