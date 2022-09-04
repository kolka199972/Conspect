import React from 'react'
import PropTypes from 'prop-types'

const FormLayout = ({title, children}) => {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 shadow p-4'>
          <h2>{title}</h2>
          {children}
        </div>
      </div>
    </div>
  )
}

FormLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  title: PropTypes.string
}

export default FormLayout
