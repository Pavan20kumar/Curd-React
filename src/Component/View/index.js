import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { Link,useParams,useNavigate } from 'react-router-dom';

function View(){
    const [data,setData] = useState([]);
    const {id} = useParams();
    useEffect(()=>{
        axios.get(`https://curd-backed-mysql.onrender.com/View/${id}`).then((res)=>{
            setData(res.data);
        })
    },[id])
    console.log(data);

    const navigate = useNavigate();

    const handlDeletle = (id)=>{
    
        axios.delete(`https://curd-backed-mysql.onrender.com/Delete/${id}`).then((res)=>{
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
                <h1>Read </h1>
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
                                <tr key={user[id]}>
                                    <td>{user['FirstName']}</td>
                                    <td>{user['LastName']}</td>
                                    <td>{user['Age']}</td>
                                    <td>{user['PhNum']}</td>
                                    <td>{user['Email']}</td>
                                    <td >
                                        <button onClick={e => handlDeletle(user.id)} className='btn btn-danger'>Delete</button>
                                        
                                        
                                        
                                        
                                        </td>
                                   
                                </tr>
                            )
                        })

                    }
                    
                </tbody>




            </table>

            <Link to='/' className='btn btn-success'>Back</Link>



        </div>
    )
    
}
export default View;
