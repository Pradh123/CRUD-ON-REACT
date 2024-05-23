import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  //redirect to login page Logic

  return (
    <div className="w-full bg-zinc-500 h-20 flex">
      <div className="w-5/6 flex items-center ">
        <h1 className=" font-bold text-2xl px-4">CRUD Operation</h1>
       
          <NavLink to="/Home" className=" font-bold text-xl px-4">
            Home
          </NavLink>
      
        
          <NavLink to="/create" className=" font-bold text-xl px-4">
            Create Date
          </NavLink>
       
      </div>
     
    
    </div>
  );
};

export default Header;
