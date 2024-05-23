import axios from 'axios';
import { MdOutlineDeleteOutline } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { FaRegEdit } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useContextStates } from '../context/StateContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import DataApi from '../context/constant';
const Pagination = () => {
  const {pageData, setPageData}=useContextStates();
  const [currentPage,setCurrentPage]=useState(1);
  //delete data logic here
  const navigate=useNavigate();
  const Deletedata = (e,id)=>{
    const confirm1 =window.confirm("do you want do delete data item ?"); 
    if(confirm1){
      axios.delete(`${DataApi}student/${id}`)
      .then(res=>{
      const deletedData=pageData.filter(item=>item.id!==id);
      setPageData(deletedData);
       navigate('/home');
    })
      .catch(err=>alert("data can not be deleted due to occurring error"));
    }
    else{
      navigate('/home');
    }
 }
 // logic for pagination

 const recordPerPage=4;
 const lastIndex=currentPage*recordPerPage;
 const firstIndex=lastIndex-recordPerPage;
 const records=pageData.slice(firstIndex,lastIndex);
 const npage=Math.ceil(pageData.length/recordPerPage);
const numbers=[...Array(npage+1).keys()].slice(1);

const Prev =()=>{
     if(currentPage!==firstIndex && currentPage>1){
      setCurrentPage(currentPage-1);
     }
}
const ChangeN =(n)=>{
   setCurrentPage(n);
}
const Next =()=>{
  if(currentPage!==lastIndex && currentPage<npage){
    setCurrentPage(currentPage+1);
   }
}

  return (
   <>{
    records.map((item)=>
    <div key={item.id} className=' flex h-10 my-3 w-full'  >
    <div className=' w-5/12'>{item.name}</div>
      <div className='w-5/12'>{item.email}</div>
      <div className=' flex  w-2/12'> 
        <NavLink to={`/update/${item.id}`} className=' bg-emerald-300 text-2xl mx-2 text-red-500 rounded-lg mx-1 p-1'><FaRegEdit /></NavLink>
        <button className=' bg-red-700 text-black rounded-lg mx-2 p-1  text-2xl' onClick={e=>Deletedata(e,item.id)}><MdOutlineDeleteOutline /></button>
        <NavLink  to={`/read/${item.id}`} className= ' bg-green-800 text-2xl mx-2 text-yellow-100 rounded-lg mx-1 p-1'><GrView /></NavLink>
      </div>
  </div>)}
  <div className='flex justify-center'>
    {currentPage>1?<NavLink className='bg-slate-400 rounded-s px-2 cursor-pointer' onClick={Prev}>prev</NavLink>:null}
    {numbers.map((n,i)=><NavLink className={`bg-orange-300 border border-solid px-2 cursor-pointer ${currentPage===n && 'active'?'bg-lime-700':''}`} onClick={()=>ChangeN(n)}>{n}</NavLink>)}
    {currentPage<npage?<NavLink className='bg-slate-400 rounded-e px-2 cursor-pointer' onClick={Next}>next</NavLink>:null}
  </div>
   </>
  )
}

export default Pagination

