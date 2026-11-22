import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FormHandling from '../pages/FormHandling'
import NavBar from '../components/NavBar'

const Approutes = () => {
  return (
    <>
    <NavBar/>
    <Routes>
        <Route path="/" element={<FormHandling/>}/>
    </Routes>
    </>
  )
}

export default Approutes