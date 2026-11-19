import React from 'react'
import NavBar from '../components/NavBar'
import { Route, Routes } from 'react-router-dom'
import ArrayProcess from '../pages/ArrayProcess'
import ObjectProcess from '../pages/ObjectProcess'
import ArrayOfObjectRender from '../pages/ArrayOfObjectRender'

const AppRoutes = () => {
  return (
   <>
   <div>
    <NavBar/>
    <Routes>
        <Route path="/" element={<ArrayProcess/>}/>
        <Route path="/obj" element={<ObjectProcess/>}/>
        <Route path="/afo" element={<ArrayOfObjectRender/>}/>
    </Routes>
   </div>
    </>
  )
}

export default AppRoutes

