import * as yup from 'yup'

export const validationSchemeYup = yup.object().shape({
  fio: yup
    .string()
    .required('ФИО обязательно для заполнения')
    .matches(
      /^([А-ЯA-Z]|[А-ЯA-Z][\x27а-яa-z]{1,}|[А-ЯA-Z][\x27а-яa-z]{1,}-([А-ЯA-Z][\x27а-яa-z]{1,}|(оглы)|(кызы)))\040[А-ЯA-Z][\x27а-яa-z]{1,}(\040[А-ЯA-Z][\x27а-яa-z]{1,})?$/g,
      'Введите корректное ФИО'
    ),
  address: yup.string().required('Адрес обязателен для заполнения'),
  email: yup
    .string()
    .required('Электронная почта обязательна для заполнения')
    .email('Email введен некорректно'),
  deliveryType: yup.string().required('Выберите вариант доставки'),
  needLiftFloor: yup.string().required('Укажите, нужен ли подъём на этаж'),
  agreement: yup
    .array()
    .test(
      'contains value',
      'Согласие на обработку данных обязательно',
      (value) => value.includes('1')
    )
})
