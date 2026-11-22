import React from 'react'
import NavBar from '../component/NavBar'
import { Route, Routes } from 'react-router-dom'
import FormHandling from '../pages/FormHandling'

const AppRoutes = () => {
  return (
    <>
    <NavBar/>
    <Routes>
        <Route path='/' element={<FormHandling/>}/>
    </Routes>
    </>
  )
}

export default AppRoutes