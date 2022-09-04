import React from 'react'
import PropTypes from 'prop-types'

const SelectField = ({
  name,
  label,
  onChange,
  value,
  error,
  options,
  defaultOption
}) => {
  const getClasses = () => `form-select ${error ? 'is-invalid' : ''}`

  return (
    <div className='mb-4'>
      <label htmlFor={name} className='form-label'>
        {label}
      </label>
      <select
        className={getClasses()}
        onChange={onChange}
        value={value}
        name={name}
        id={name}
      >
        <option disabled value=''>
          {defaultOption}
        </option>
        {options.map(({label, value}) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      {error && <div className='invalid-feedback'>{error}</div>}
    </div>
  )
}

SelectField.defaultProps = {
  defaultOption: 'Выберите вариант...'
}

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  )
}

export default SelectField
