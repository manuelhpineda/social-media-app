import React, { useState } from 'react'
import { Button } from 'components'

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false)

  const toggleLoading = () => {
    setIsLoading((curr) => !curr)
  }

  return (
    <div>
      <h1>test</h1>
      <Button onClick={toggleLoading}>Toggle Loading</Button>
      <br />
      <br />
      <br />
      <Button isLoading={isLoading}>Submit</Button>
    </div>
  )
}

export default HomePage
