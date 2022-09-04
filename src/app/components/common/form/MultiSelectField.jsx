import React from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'

const MultiSelectField = ({label, options, value, onChange, name}) => {
  const handleChange = (values) => {
    const fakeEvent = {target: {name, value: values}}
    onChange(fakeEvent)
  }

  return (
    <div className='mb-4'>
      <label htmlFor={name}>{label}</label>
      <Select
        isMulti
        options={options}
        value={value}
        onChange={handleChange}
        name={name}
        id={name}
      />
    </div>
  )
}

MultiSelectField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  )
}

export default MultiSelectField
