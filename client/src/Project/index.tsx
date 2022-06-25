import React from 'react'
import { Route, Routes } from 'react-router-dom'

import HomePage from './HomePage'
import Register from './Auth/Register'

const Project = () => {
  return (
    <>
      <Routes>
        <Route path={'/'}>
          <Route path={'/'} element={<HomePage />} />
        </Route>
        <Route path={'/enter'}>
          <Route path={'/enter'} element={<Register />} />
        </Route>
      </Routes>
    </>
  )
}

export default Project
