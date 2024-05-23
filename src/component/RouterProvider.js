import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './Layout';
import CreateData from './CreateData';
import App from '../App';
import EditData from './EditData';
import ReadData from './ReadData';
import BrowsePage from './BrowsePage';
import ErrorPage from './ErrorPage';
const RouterProvider = ({children}) => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='' element={<BrowsePage/>}/>
           <Route  path='home' element={<App/>}/>
            <Route path='create' element={<CreateData/>}/> 
            <Route path='update/:id' element={<EditData />}/>
            <Route path='read/:id' element={<ReadData/>}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Route>
    </Routes>
    {children}
    </BrowserRouter>
  )
}

export default RouterProvider