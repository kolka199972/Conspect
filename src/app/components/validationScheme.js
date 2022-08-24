export const validationScheme = {
  email: {
    isRequired: {
      message: 'Электронная почта обязательна для заполнения'
    },
    isEmail: {
      message: 'Email введён некорректно'
    }
  },
  link: {
    isRequired: {
      message: 'Ccылка обязательна для заполнения'
    },
    isUrl: {
      message: 'URL не корректный'
    }
  },
  description: {
    isRequired: {
      message: 'Описание обязательно для заполнения'
    },
    min: {
      message: 'Описание должно содердать минимум 20 символов',
      param: 20
    }
  },
  password: {
    isRequired: {
      message: 'Пароль обязателен для заполнения'
    },
    isCapitalSymbol: {
      message: 'Пароль должен содержать заглавную букву'
    },
    isContainDigit: {
      message: 'Пароль должен содержать число'
    },
    min: {
      message: 'Пароль должен содержать мимимум 8 символов',
      param: 8
    }
  }
}
