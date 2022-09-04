import React, {useEffect, useState} from 'react'
import {validate} from '../../utils/validator'
import FormLayout from '../common/form/FormLayout'
import TextField from '../common/form/TextField'
import {validationScheme} from './validationScheme'

const FeedbackForm = () => {
  const [values, setValues] = useState({
    email: '',
    link: '',
    description: '',
    password: ''
  })
  const [errors, setErrors] = useState({})
  const isValid = Object.keys(errors).length === 0

  useEffect(() => {
    const errors = validate(values, validationScheme)
    setErrors(errors)
  }, [values])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isValid) {
      console.log(values)
    }
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    setValues((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const {email, link, description, password} = values

  return (
    <FormLayout title='Отчет об ошибке'>
      <form onSubmit={handleSubmit}>
        <TextField
          name='email'
          label='Email'
          value={email}
          onChange={handleChange}
          error={errors.email}
        />

        <TextField
          name='link'
          label='Ссылка на страницу с ошибкой'
          value={link}
          onChange={handleChange}
          error={errors.link}
        />

        <TextField
          name='description'
          label='Описание'
          value={description}
          onChange={handleChange}
          error={errors.description}
        />

        <TextField
          id='password'
          name='password'
          label='Пароль'
          value={password}
          onChange={handleChange}
          error={errors.password}
          type='password'
        />

        <button
          className='btn btn-primary w-100 mx-auto'
          type='submit'
          disabled={!isValid}
        >
          Отправить
        </button>
      </form>
    </FormLayout>
  )
}

export default FeedbackForm
