import React from 'react'
import PropTypes from 'prop-types'

const GroupList = ({
  items,
  filter,
  valueProperty,
  contentProperty,
  onChangeFilter
}) => {
  return (
    <div className='list-group'>
      {items.map((item) => (
        <button
          key={item[valueProperty]}
          className={
            'list-group-item list-group-item-action' +
            (filter === item[valueProperty] ? ' active' : '')
          }
          onClick={() => onChangeFilter(item[valueProperty])}
        >
          {item[contentProperty]}
        </button>
      ))}
    </div>
  )
}

GroupList.defaultProps = {
  valueProperty: 'id',
  contentProperty: 'text'
}

GroupList.propTypes = {
  items: PropTypes.array.isRequired,
  filter: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired,
  valueProperty: PropTypes.string.isRequired,
  contentProperty: PropTypes.string.isRequired
}

export default GroupList
