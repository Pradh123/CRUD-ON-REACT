import {useEffect} from 'react';
import axios from 'axios';
import './App.css';
import { useContextStates } from './context/StateContext';
import Pagination from './component/Pagination';
import DataApi from './context/constant';

function App() {
  const {setPageData,pageData}=useContextStates();
  // all the data
   const loadData= async ()=>{
      const data1= await axios.get(`${DataApi}student`);
      return data1;
   }
  useEffect(()=>{
    loadData().then(res=>setPageData(res.data)).catch(err=>console.log(err));
  },[])

  return (
   <>
 <div className=" w-[1000px] flex flex-col justify-center items-center h-fit mt-2" >
  <div className=' flex w-full bg-lime-500'>
      <div className=' font-bold w-5/12 px-10'>NAME</div>
      <div className=' font-bold w-5/12 px-10'>EMAIL ID</div>
      <div className=' font-bold w-2/12 px-10'> ACTIONs</div>
  </div>
  <div className=' w-full'>
  {pageData && <Pagination/>}
  </div>
      
  </div>
    </>
  );
}

export default App;
