import {useEffect, useState} from 'react';
import axios from 'axios';
import {  useNavigate, useParams } from 'react-router-dom';
import DataApi from '../context/constant';

function ReadData() {
  const [data, setData] = useState(null);
  const navigate=useNavigate();
  const {id}=useParams();
  // all the data
   const loadData= async ()=>{
      const data1= await axios.get(`${DataApi}student/${id}`);
      return data1;
   }
  useEffect(()=>{
    loadData().then(res=>setData(res.data)).catch(err=>console.log(err));
  },[])
  //logic here for navigation to the home
  const handle=()=>{
    navigate('/home')
  }
  return (
   <>
 <div className="App w-full flex justify-center items-center h-fit" >
  {/* <CreateData/> */}
      <table className=' border-2 border-spacing-x-32 w-1/2'>
     
  <thead>
    <tr>
      <td className=' font-bold'>NAME</td>
      <td className=' font-bold'>EMAIL ID</td>
      <td className=' font-bold'> ACTIONs</td>
    </tr>
  </thead>
  <tbody >
  {data && 
    <tr key={data.id} className='h-14 my-3' >
    <td>{data.name}</td>
      <td>{data.email}</td>
      <td> 
        <button className=' bg-green-600 text-black rounded-lg mx-1 p-1' onClick={handle}>Back To Home</button>
      </td>
    </tr>}
  </tbody>
      </table>
  </div>
    </>
  );
}

export default ReadData;