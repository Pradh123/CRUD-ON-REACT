import {useState} from 'react'
import { useAuthen } from '../context/UserContext'
import { getDatabase,set,ref } from "firebase/database";
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
 const navigate=useNavigate();
const [data,setData]= useState({name:'',email:'',password:''});
 const {app,auth,createUserWithEmailAndPassword}=useAuthen();
 const db=getDatabase(app);
 const addData=(e)=>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth,data.email,data.password)
    .then((userCredential) => {
        // push data into database
        const user = userCredential.user.uid;
        set(ref(db,'user/'+user),data);
        navigate('/signin');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
      
        // ..
      })
      
      
 }
    return (
      <div className='w-4/12  bg-slate-400 my-10 rounded-lg h-fit'>
          <h1 className='text-center my-4 font-bold text-rose-600'>Sign Up Form</h1>
          <form onSubmit={addData} className='w-full flex flex-col gap-5'>
              <input type='text' placeholder='Enter Name Here' className=' py-1 my-1 mx-2 rounded px-1' onChange={e=>setData({...data,name:e.target.value})}/>
              <input type='email' placeholder='Enter Email Here className' className=' py-1 my-1 mx-2 rounded px-1'onChange={e=>setData({...data,email:e.target.value})}/>
              <input type='password' placeholder='Enter password Here'
              onChange={e=>setData({...data,password:e.target.value})} className=' py-1 my-1 mx-2 rounded px-1'/>
              <button type='submit' className=' bg-green-600 text-red-600 rounded-lg w-1/2 m-auto py-2 mb-6' >Sign Up</button>
          </form>
      </div>
    )
}

export default SignUp