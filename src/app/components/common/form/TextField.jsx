import React, {useState} from 'react'
import PropTypes from 'prop-types'

const TextField = ({name, label, type, value, onChange, error}) => {
  const [showPassword, setShowPassword] = useState(false)

  const getInputClasses = () => {
    return 'form-control' + (error ? ' is-invalid' : '')
  }

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState)
  }

  return (
    <div className='mb-4'>
      <label htmlFor={name}>{label}</label>
      <div className='input-group has-validation'>
        <input
          className={getInputClasses()}
          type={showPassword ? 'text' : type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
        />
        {type === 'password' && (
          <button
            type='button'
            className='btn btn-outline-secondary'
            onClick={toggleShowPassword}
          >
            {showPassword ? 'Скрыть' : 'Показать'} пароль
          </button>
        )}
        {error && <div className='invalid-feedback'>{error}</div>}
      </div>
    </div>
  )
}

TextField.defaultProps = {
  type: 'text'
}

TextField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string
}

export default TextField
