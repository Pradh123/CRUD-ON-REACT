import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './Layout';
import CreateData from './CreateData';
import App from '../App';
import SignIn from './SignIn';
import SignUp from './SignUp';
import EditData from './EditData';
import ReadData from './ReadData';
import BrowsePage from './BrowsePage';
import ErrorPage from './ErrorPage';
import ProtectedRoute from './ProtectedRoute';
const RouterProvider = ({children}) => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='' element={<BrowsePage/>}/>
           <Route  path='home' element={<ProtectedRoute Component={App}/>}/>
            <Route path='create' element={<ProtectedRoute Component={CreateData}/>}/> 
            <Route path='signin' element={<SignIn/>}/>
            <Route path='signup' element={<SignUp/>}/>
            <Route path='update/:id' element={<ProtectedRoute Component={EditData }/>}/>
            <Route path='read/:id' element={<ProtectedRoute Component={ReadData}/>}/>
            <Route path='*' element={<ProtectedRoute Component={ErrorPage}/>}/>
        </Route>
    </Routes>
    {children}
    </BrowserRouter>
  )
}

export default RouterProvider