import React from 'react'
import { Route, Routes } from 'react-router-dom'

import HomePage from './HomePage'
import LoginPage from './LoginPage'

const Project = () => {
  return (
    <>
      <Routes>
        <Route path={'/'}>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/LoginPage'} element={<LoginPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default Project
