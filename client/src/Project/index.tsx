import React from 'react'
import { Route, Routes } from 'react-router-dom'

import HomePage from './HomePage'

const Project = () => {
  return (
    <>
      <Routes>
        <Route path={'/'}>
          <Route path={'/'} element={<HomePage />} />
        </Route>
      </Routes>
    </>
  )
}

export default Project
