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
  email: zod
    .string({ required_error: 'Email is required' })
    .email({ message: 'invalid email' }),
  password: zod
    .string()
    .min(6, { message: 'password must be more that 6 characters long' }),
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
          {errors.password?.message && <p>{errors.password?.message}</p>}
          <Button mt={5} isFull type={'submit'}>
            Create Account
          </Button>
        </form>
      </FormWrapper>
    </>
  )
}

export default Register
