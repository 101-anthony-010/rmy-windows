import React from 'react'
import PropTypes from 'prop-types'

import { Contact } from '../../models/contact.class'

const ContactComponent = ({props}) => {
  return (
    <div>
        <h2>
            Nombre: { props.name }
        </h2>
        <h3>
            Apellido: { props.apellido }
        </h3>
        <h4>
            Correo: { props.email }
        </h4>
        <h5>
            Estado: { props.conectado ? 'CONTACTO EN LINEA':'CONTACTO NO DISPONIBLE' } 
        </h5>
    </div>
  )
}

ContactComponent.propTypes = {
    props: PropTypes.instanceOf(Contact)
}

export default ContactComponent
