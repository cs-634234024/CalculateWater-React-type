import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from './pages/Home'
import { RatePrice } from './pages/RatePrice'
import Output from './pages/Output'

type Props = {}

const CreateRouter = (props: Props) => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/output' element={<Output/>} />
        <Route path='/rateprice' element={<RatePrice/>} />
    </Routes>
  )
}

export default CreateRouter