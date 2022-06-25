import React from 'react'

import { Button, Heading, Input } from 'components'
import { FormWrapper } from './Styles'

const Register = () => {
  return (
    <>
      <FormWrapper>
        <Heading>Register</Heading>
        <Input placeholder={'Email'} />
        <Input mt={4} type={'password'} placeholder={'Password'} />
        <Button mt={5} isFull>
          Create Account
        </Button>
      </FormWrapper>
    </>
  )
}

export default Register
