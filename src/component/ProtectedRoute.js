import React, { useEffect } from 'react'
import { useContextStates } from '../context/StateContext'
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = (props) => {
  const {Component}=props;
  const navigate=useNavigate();
  const {user}=useContextStates();

  useEffect(()=>{
    if(user===null){
      navigate('/');
    }
  })
  
  return (
      <>
      <Component/>
      </>
  )
 
  
}

export default ProtectedRoute