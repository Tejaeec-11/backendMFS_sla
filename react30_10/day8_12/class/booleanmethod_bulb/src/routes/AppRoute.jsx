import React from 'react'
import {Routes ,Route } from 'react-router-dom'
import NavBar from '../componentscreenotdisplay/NavBar'
import Nullish from '../pagesdisplay/Nullish'
import Boolean from '../pagesdisplay/Boolean'
const AppRoute = () => {
  return (<>
    <div>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Boolean/>}/>
             <Route path='/nullishpage' element={<Nullish/>}/>
              <Route path='/arraypage' element={<Array/>}/>
        </Routes>
    </div>
</>  )
}

export default AppRoute