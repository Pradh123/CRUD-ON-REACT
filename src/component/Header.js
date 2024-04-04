import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useContextStates } from "../context/StateContext";
const Header = () => {
  const navigate = useNavigate();
  const { logout,user, setUser ,setLogout} = useContextStates();
  //redirect to login page Logic
  const redirectLogic = () => {
    setUser(null);
    setLogout(!logout);
    navigate('/');
  };

  console.log(user);
  return (
    <div className="w-full bg-zinc-500 h-20 flex">
      <div className="w-5/6 flex items-center ">
        <h1 className=" font-bold text-2xl px-4">CRUD Operation</h1>
        {user && (
          <NavLink to="/Home" className=" font-bold text-xl px-4">
            Home
          </NavLink>
        )}
        {user && (
          <NavLink to="/create" className=" font-bold text-xl px-4">
            Create Date
          </NavLink>
        )}
      </div>
      {user ? (
        <div className="w-1/6 flex items-end">
          <h1 className=" text-black rounded-lg w-4/12 underline  m-auto py-2 mb-6 pl-4">{`Hello ${user}`}</h1>
          <NavLink
            onClick={redirectLogic}
            className=" bg-green-600 text-black rounded-lg w-4/12 m-auto py-2 mb-6 px-1"
          >
            {" "}
            Logout
          </NavLink>
        </div>
      ) : (
        <div className="w-1/6 flex items-end">
          <NavLink
            to="/signin"
            className=" bg-green-600 text-black rounded-lg w-4/12  m-auto py-2 mb-6 pl-4"
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className=" bg-green-600 text-black rounded-lg w-4/12 m-auto py-2 mb-6 px-1"
          >
            {" "}
            Sign Up
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Header;
