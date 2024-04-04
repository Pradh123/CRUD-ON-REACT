import React from 'react'
import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div> 
      
    <Header/>
   <div className="App w-full flex justify-center items-center h-fit">
   <Outlet/>
   </div>
   <Footer/>
    </div>
  )
}

export default Layout