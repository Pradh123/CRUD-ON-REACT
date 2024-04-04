import { useState } from 'react'
import { useAuthen } from '../context/UserContext'
import { getDatabase, ref, child, get } from "firebase/database";
import { useContextStates } from '../context/StateContext';
import { useNavigate } from 'react-router-dom';
const SignIn = () => {
   const [data,setData]= useState({email:'',password:''});
 const {app,auth,signInWithEmailAndPassword}=useAuthen();
 const {setUser,setLoginErr,loginErr}=useContextStates();
 const db = ref(getDatabase(app));
const navigate=useNavigate();
 const addData=(e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth,data.email,data.password).then((userCredential) => {
      // ftech data form realtime database
      const user = userCredential.user.uid;
      get(child(db, `user/${user}`)).then((snapshot) => {
        if (snapshot.exists()) {
          const username=snapshot.val().name;
          setUser(username);
        // navigate to home component
        navigate('/home')
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
      
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
     // const errorMessage = error.message;
     console.log(errorCode);
      setLoginErr(true);
      // ..
    });;
 }
    return (
      <div className='w-4/12  bg-slate-400 my-10 rounded-lg h-fit'>
          <h1 className='text-center my-4 font-bold text-rose-600'>Login Form</h1>
         
          <form onSubmit={addData} className='w-full flex flex-col gap-5'>
          {loginErr? " Invalid email or password":null}
              <input type='email' placeholder='Enter Email Here' className=' py-2 my-2 mx-2 rounded px-1'
              onChange={e=>setData({...data,email:e.target.value})}/>
              <input type='password' placeholder='Enter password Here'
              onChange={e=>setData({...data,password:e.target.value})} className=' py-2 my-2 mx-2 rounded px-1'/>
              <button type='submit' className=' bg-green-600 text-red-600 rounded-lg w-1/2 m-auto py-2 mb-6' >Login </button>
          </form>
      </div>
    )
}

export default SignIn