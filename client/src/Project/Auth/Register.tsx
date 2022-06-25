import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { Button, Heading, Input } from 'components'
import { FormWrapper } from './Styles'

type FormData = {
  email: string
  password: string
}

const schema = zod.object({
  email: zod.string().email({ message: 'invalid email' }),
})

const Register = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })
  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <>
      <FormWrapper>
        <form onSubmit={onSubmit}>
          <Heading>Register</Heading>
          <Input placeholder={'Email'} {...register('email')} />
          {errors.email?.message && <p>{errors.email?.message}</p>}
          <Input
            mt={4}
            type={'password'}
            placeholder={'Password'}
            {...register('password')}
          />
          <Button mt={5} isFull type={'submit'}>
            Create Account
          </Button>
        </form>
      </FormWrapper>
    </>
  )
}

export default Register
