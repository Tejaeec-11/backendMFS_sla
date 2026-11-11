
import { Route, Routes } from 'react-router-dom'

import ArrayRendering from '../pages/ArrayRendering'
import Product from "../pages/Product"
import ProductList from "../pages/ProductList"
import BooleanRendering from "../pages/BooleanRendering"
import ObjectRendering from "../pages/ObjectRendering"
import ArrayOfObjectRendering from "../pages/ArrayOfObjectRendering"

const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Product />} />
        <Route path='/product/:id' element={<ProductList />} />

        <Route path='/boolean' element={<BooleanRendering />} />
        <Route path='/array' element={<ArrayRendering />} />
        <Route path='/object' element={<ObjectRendering />} />
        <Route path='/afo' element={<ArrayOfObjectRendering />} />
      </Routes>
    </>
  )
}

export default AppRoute
