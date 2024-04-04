import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditData = () => {
    const [data,setData]=useState({name:'',email:''});
    const {id}=useParams();
    const navigate=useNavigate();
    // get data according to id

    const loadData= async ()=>{
        const data1= await axios.get(`http://localhost:3001/student/${id}`);
        return data1;
     }
    useEffect(()=>{
      loadData().then(res=>setData(res.data)).catch(err=>console.log(err));
    },[])

//udate the data
    const updateData=(event)=>{
        event.preventDefault();
        axios.put(`http://localhost:3001/student/${id}`,data)
        .then(res=>navigate('/home'))
        .catch(err=>alert("query failed",err));
    }
    return (
      <div className='w-4/12  bg-slate-400 my-10 rounded-lg h-fit'>
          <h1 className='text-center my-4 font-bold text-rose-600'>Update Data</h1>
          <form onSubmit={updateData} className='w-full flex flex-col gap-5'>
          <input type='text' readOnly value={data.id} className=' py-2 my-2 mx-2 rounded px-1'/>
              <input type='text' value={data.name} placeholder='Enter Name Here' className=' py-2 my-2 mx-2 rounded px-1' onChange={e=>setData({...data,name:e.target.value})} />
              <input type='email' value={data.email} placeholder='Enter Email Here className'className=' py-2 my-2 mx-2 rounded px-1' onChange={e=>setData({...data,email:e.target.value})}/>
              <button type='submit' className=' bg-green-600 text-red-600 rounded-lg w-1/2 m-auto py-2 mb-6' >Update </button>
          </form>
      </div>
    )
}

export default EditData