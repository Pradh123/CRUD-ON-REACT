import React, { useState } from 'react'
import ImageArr from './image/Image';
import { IoChevronForwardSharp } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";
const BrowsePage = () => {
  const [count ,setCount]= useState(0);

const prevImage =()=>{
 if(count<5 && count>0){
  setCount(count-1);
 }
 else{
  setCount(4);
 }
}
const nextImage =()=>{
  if(count<4 && count>=0){
    setCount(count+1);
  }
  else{
    setCount(0)
  }
}
  return (

    <div className=' w-full h-[50vh]'>
      <button className='flex justify-center items-center w-20 rounded-lg h-[50vh]  absolute left-0 mx-3 my-8 text-[70px]'
      onClick={prevImage}><IoChevronBack /></button>
    <div className=' w-[100vw] h-[50vh] m-auto'>
      {/* image section */}
     <img src={ImageArr[count]} alt='image' className=' w-[100vw] h-[71vh] m-auto'/>

    </div>
    <button className=' flex justify-center items-center w-20 rounded-lg h-[50vh]  absolute right-0 top-0 my-[110px] mx-[15px] text-[70px] ' onClick={nextImage}><IoChevronForwardSharp /></button>
    </div>
  )
}

export default BrowsePage;