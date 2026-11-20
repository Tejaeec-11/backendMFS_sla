import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ArrayProcess from '../pages/ArrayProcess'
import ObjectProcess from '../pages/ObjectProcess'
import ArrayOfObjectRender from '../pages/ArrayOfObjectRender'
import NavBar from '../components/NavBar'
const AppRoutes = () => {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ArrayProcess/>}/>
      <Route path="/obj" element={<ObjectProcess/>}/>
      <Route path="/arrayofobjectrender" element={<ArrayOfObjectRender/>}/>
    </Routes>
    </>
   )
}

export default AppRoutes