import {useEffect, useState} from 'react';
import { MdOutlineDeleteOutline } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { FaRegEdit } from "react-icons/fa";
import axios from 'axios';
import './App.css';
import { NavLink, useNavigate } from 'react-router-dom';

function App() {
  const [data, setData] = useState(null);
  const navigate=useNavigate();
  // all the data
   const loadData= async ()=>{
      const data1= await axios.get("http://localhost:3001/student");
      return data1;
   }
  useEffect(()=>{
    loadData().then(res=>setData(res.data)).catch(err=>console.log(err));
  },[])
  //logic here for delete the data
   const deletedata = (e,id)=>{
      const confirm1 =window.confirm("do you want do delete data item ?");
      if(confirm1){
        axios.delete(`http://localhost:3001/student/${id}`)
        .then(res=>{
        const deletedData=data.filter(item=>item.id!==id);
        setData(deletedData);
         navigate('/home');
      })
        .catch(err=>alert("data can not be deleted due to occurring error"));
      }
      else{
        navigate('/home');
      }

   }

  return (
   <>
 <div className=" w-[1000px] flex justify-center items-center h-fit mt-2" >
  {/* <CreateData/> */}
      <table className=' border-2 border-spacing-x-32 w-1/2'>
     
  <thead>
    <tr>
      <td className=' font-bold'>NAME</td>
      <td className=' font-bold'>EMAIL ID</td>
      <td className=' font-bold'> ACTIONs</td>
    </tr>
  </thead>
  <tbody>
  {data && data.map((item)=>
    <tr key={item.id} className='h-10'  >
    <td className='w-5/12 ml-2 border-spacing-1'>{item.name}</td>
      <td className='w-5/12'>{item.email}</td>
      <td className=' flex  w-2/12'> 
        <NavLink to={`/update/${item.id}`} className=' bg-emerald-300 text-2xl mx-2 text-red-500 rounded-lg mx-1 p-1'><FaRegEdit /></NavLink>
        <button className=' bg-red-700 text-black rounded-lg mx-2 p-1  text-2xl' onClick={e=>deletedata(e,item.id)}><MdOutlineDeleteOutline /></button>
        <NavLink  to={`/read/${item.id}`} className= ' bg-green-800 text-2xl mx-2 text-yellow-100 rounded-lg mx-1 p-1'><GrView /></NavLink>
      </td>
    </tr>)}
  </tbody>
      </table>
  </div>
    </>
  );
}

export default App;
