import React from 'react'
import PropTypes from 'prop-types'
import SingleCheckboxField from './SingleCheckboxField'

const CheckboxField = ({label, value, options, onChange, name, error}) => {
  const getIsChecked = (inputValue) => value.includes(inputValue)

  const handleChange = (e) => {
    const {value: inputValue} = e.target
    const newValue = value.includes(inputValue)
      ? value.filter((v) => v !== inputValue)
      : [...value, inputValue]

    const fakeEvent = {
      target: {
        name,
        value: newValue
      }
    }
    onChange(fakeEvent)
  }

  const getInputClasses = () => {
    return error ? ' is-invalid' : ''
  }

  return (
    <div className='mb-4'>
      <p className={getInputClasses()}>
        <label>{label}</label>
      </p>
      {options.map((option) => (
        <SingleCheckboxField
          key={option.value}
          name={name}
          label={option.label}
          value={option.value}
          onChange={handleChange}
          checked={getIsChecked(option.value)}
        />
      ))}
      {error && <div className='invalid-feedback'>{error}</div>}
    </div>
  )
}

CheckboxField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ),
  error: PropTypes.string
}

export default CheckboxField
