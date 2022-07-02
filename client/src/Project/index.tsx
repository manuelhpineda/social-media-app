import React from 'react'
import { Route, Routes } from 'react-router-dom'

import HomePage from './HomePage'
import Register from './Auth/Register'

const Project = () => {
  return (
    <>
      <Routes>
        <Route path={'/'}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path={'/enter'}>
          <Route path={'login'} element={<Register />} />
          <Route path={'register'} element={<Register />} />
        </Route>
      </Routes>
    </>
  )
}

export default Project
