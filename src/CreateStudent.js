import React,{useState} from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function CreateStudent(){
    const [id,setId]=useState('')
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const navigate=useNavigate();

    function handleSubmit(event){
        event.preventDefault()
        axios.post('http://localhost:8081/create',{id,name,email})
        .then(res=>{
            console.log(res);
            navigate('/');
        }).catch(err=>console.log(err));
    }
    return(
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h2>Add Student</h2>
                <div className='mb-2'>
                    <label htmlFor="">ID</label>
                    <input type="text" placeholder='Enter ID' className='form-control'
                    onChange={e=>setId(e.target.value)}
                    />
                </div>
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
                <button className='btn btn-success'>Submit</button>
            </form>
            </div>
        </div>
    )
}

export default CreateStudent