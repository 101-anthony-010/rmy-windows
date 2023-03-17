import React from 'react'
import PropTypes from 'prop-types'

import { Contact } from '../../models/contact.class'
import ComponentB from './ComponentB'

function ComponentA({ propsContact }) {
  return (
    <div>
        <h2>{propsContact.name}</h2>
        <h3>{propsContact.apellido}</h3>
        <h4>{propsContact.email}</h4>
        <ComponentB props={true}></ComponentB>
    </div>
  )
}

ComponentA.propTypes = {
    propsContact: PropTypes.instanceOf(Contact)
}

export default ComponentA
