import React from 'react'
import PropTypes from 'prop-types'

const RadioField = ({name, label, options, value, onChange, error}) => {
  const getOptionId = (option) => `${option.label}_${option.value}`

  const getClasses = () => {
    return `form-check form-check-inline ${error ? 'is-invalid' : ''}`
  }

  return (
    <div className='mb-4'>
      <p>
        <label>{label}</label>
      </p>
      {options.map((option) => (
        <div key={option.value} className={getClasses()}>
          <input
            type='radio'
            className='form-check-input'
            checked={option.value === value}
            onChange={onChange}
            value={option.value}
            name={name}
            id={getOptionId(option)}
          />
          <label htmlFor={getOptionId(option)} className='form-check-label'>
            {option.label}
          </label>
        </div>
      ))}
      {error && <div className='invalid-feedback'>{error}</div>}
    </div>
  )
}

RadioField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ),
  error: PropTypes.string
}

export default RadioField
