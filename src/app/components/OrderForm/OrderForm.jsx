import React, {useEffect, useState} from 'react'
import FormLayout from '../common/form/FormLayout'
import RadioField from '../common/form/RadioField'
import SelectField from '../common/form/SelectField'
import TextField from '../common/form/TextField'
import {
  agreements,
  deliveryTypeList,
  giftList,
  needLiftFloorOptions
} from './fieldOptions'
import {validationSchemeYup} from './validationScheme'
import MultiSelectField from '../common/form/MultiSelectField'
import CheckboxField from '../common/form/CheckboxField'
import {parceYupError} from '../../utils/parceYupError'

const OrderForm = () => {
  const [values, setValues] = useState({
    fio: '',
    email: '',
    deliveryType: '',
    needLiftFloor: '',
    address: '',
    gifts: [],
    agreement: []
  })
  const [errors, setErrors] = useState({})
  const isValid = Object.keys(errors).length === 0

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isValid) {
      console.log('Отправлено')
    }
  }

  const handleChange = ({target}) => {
    const {value, name} = target
    setValues((prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  useEffect(() => {
    validationSchemeYup
      // // На месте вызова validate() в orderForm
      // /**
      //  * Устанавливаем параметр { abortEarly: false },
      //  * так Yup будет искать все ошибки по всем полям,
      //  * иначе он отдаст только одну и остановит проверку
      //  */
      .validate(values, {abortEarly: false})
      .catch((yupError) => {
        const errors = parceYupError(yupError)

        setErrors(errors)
      })
  }, [values])

  return (
    <FormLayout title='Оформление заказа'>
      <form onSubmit={handleSubmit}>
        <TextField
          id='fio'
          name='fio'
          label='ФИО'
          value={values.fio}
          onChange={handleChange}
          error={errors.fio}
          type='text'
        />

        <TextField
          id='email'
          name='email'
          label='Email'
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          type='text'
        />

        <TextField
          id='address'
          name='address'
          label='Адрес'
          value={values.address}
          onChange={handleChange}
          error={errors.address}
        />

        <SelectField
          name='deliveryType'
          label='Выберите доставку'
          value={values.deliveryType}
          onChange={handleChange}
          error={errors.deliveryType}
          options={deliveryTypeList}
          defaultOption='Выберите вариант доставки'
        />

        <RadioField
          name='needLiftFloor'
          value={values.needLiftFloor}
          label='Нужен подъём на этаж?'
          onChange={handleChange}
          options={needLiftFloorOptions}
          error={errors.needLiftFloor}
        />

        <MultiSelectField
          label='Выберите подарок'
          options={giftList}
          onChange={handleChange}
          value={values.gifts}
          name='gifts'
        />

        <CheckboxField
          options={agreements}
          name='agreement'
          value={values.agreement}
          label='Подтвердите согласие'
          onChange={handleChange}
          error={errors.agreement}
        />

        <button className='btn btn-primary w-100 mx-auto' type='submit'>
          Оформить
        </button>
      </form>
    </FormLayout>
  )
}

export default OrderForm
