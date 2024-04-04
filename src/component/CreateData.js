import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const CreateData = () => {
  const [data,setData]=useState({name:'',email:''});
  const navigate=useNavigate();
  const addData=(event)=>{
    event.preventDefault();
    axios.post("http://localhost:3001/student",data).
    then(res=>navigate('/home'))
    
    
  }
  return (
    <div className='w-4/12  bg-slate-400 my-10 rounded-lg h-fit'>
        <h1 className='text-center my-4 font-bold text-rose-600'>ADD DATA</h1>
        <form onSubmit={addData} className='w-full flex flex-col gap-5'>
            <input type='text' placeholder='Enter Name Here' onChange={e=>setData({...data,name:e.target.value})} className=' py-2 my-2 mx-2 rounded px-1'/>
            <input type='email' placeholder='Enter Email Here className' onChange={e=>setData({...data,email:e.target.value})} className=' py-2 my-2 mx-2 rounded px-1'/>
            <button type='submit' className=' bg-green-600 text-red-600 rounded-lg w-1/2 m-auto py-2 mb-6' >ADD Data</button>
        </form>
    </div>
  )
}

export default CreateData