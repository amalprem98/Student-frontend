import React,{useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function UpdateStudent(){
    const { id } = useParams();
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const navigate=useNavigate();

    function handleSubmit(event){
        console.log("Check"+id)
        event.preventDefault()
        axios.put(`http://localhost:8081/update/${id}`,{name,email,id})
        .then(res=>{
            console.log(res);
            navigate('/');
        }).catch(err=>console.log(err));
    }
    return(
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h2>Update Student</h2>
                <div className='mb-2'>
                    <label htmlFor="">NAME</label>
                    <input type="text" placeholder='Enter Name' className='form-control'
                    onChange={e=>setName(e.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor="">EMAIL</label>
                    <input type="email" placeholder='Enter Email' className='form-control'
                    onChange={e=>setEmail(e.target.value)}
                    />
                </div>
                <button className='btn btn-success'>Update</button>
            </form>
            </div>
        </div>
    )
}

export default UpdateStudent