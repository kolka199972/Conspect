import React from 'react'
import {Link, Route, Switch} from 'react-router-dom'
import ContactDepartments1 from './ContactDepartments1'
import ContactDepartments2 from './ContactDepartments2'

const Contacts = () => {
  return (
    <>
      <h1>Контакты</h1>
      <ul>
        <li>
          <Link to='/contacts/departaments-1'>Департамент 1</Link>
        </li>
        <li>
          <Link to='/contacts/departaments-2'>Департамент 2</Link>
        </li>
      </ul>
      <Switch>
        <Route
          path='/contacts/departaments-1'
          component={ContactDepartments1}
        />
        <Route
          path='/contacts/departaments-2'
          component={ContactDepartments2}
        />
      </Switch>
    </>
  )
}

export default Contacts
