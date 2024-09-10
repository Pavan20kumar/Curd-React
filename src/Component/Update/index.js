import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


function Update(){

    const [FirstName , setFirstName] = useState('')
    const [LastName , setLastName] = useState('')
    const [Email , setEmail] = useState('')
    const [Age , setAge] = useState('')
    const[PhNum , setPhNum] = useState('')
    
    const Navigate = useNavigate()

    const {id} = useParams()
  
    

    function handleSubmite(event){
        event.preventDefault();

        axios.put(`https://curd-backed-mysql.onrender.com/Update/${id}`,{FirstName, LastName, Age, PhNum, Email})
        .then(res =>{
            Navigate('/')
            console.log(res.data);
        }).catch(err => console.log(err));



        

        
        

       








      
        
    }
    return(
        <div className="container-fluid">
            
             <form onSubmit={handleSubmite}>
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center mt-4 fs-3 fst-italic">Update Curd</h1>
                </div>
               
                <div className="col-md-4">
                    <div className="mb-3">
                    <label className="form-label "for="FirstName">FirstName</label>
                    <input type="text" className="form-control" id="FirstName" onChange={e => setFirstName(e.target.value)} />
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="mb-3">
                    <label className="form-label "for="LastName">LastName</label>
                    <input type="text" className="form-control" id="LastName" onChange={e => setLastName(e.target.value)}  />
                    </div>
                </div>



                <div className="col-md-4">
                    <div className="mb-3">
                    <label className="form-label "for="Age">Age</label>
                    <input type="text" className="form-control" id="Age"  onChange={e => setAge(e.target.value)}  />
                    </div>
                </div>


                <div className="col-md-4">
                    <div className="mb-3">
                        <label className="form-label" for="PhNum">PhNum</label>
                        <input type="text" className="form-control" id="PhNum"  onChange={e => setPhNum(e.target.value)}  />
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="mb-3">
                    <label className="form-label "for="Email">Email</label>
                    <input type="text" className="form-control" id="Email"  onChange={e => setEmail(e.target.value)}  />
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="mb-3">
                    <button className="btn btn-primary mt-3">Add</button>
                    </div>
                </div>

              






            </div>
            </form>
            
        </div>
    )
}
export default Update;
