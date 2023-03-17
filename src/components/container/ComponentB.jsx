import React, { useState } from 'react'
import PropTypes from 'prop-types'

function ComponentB(props) {
    const [conectado, setConectado] = useState(props)
    return (
        <div>
            <button onClick={ () => setConectado(!conectado) } >{conectado === false ? 'Conectado en linea' : 'Desconectado no disponible'}</button>
        </div>
    )
}

ComponentB.propTypes = {
    props: PropTypes.bool
}

export default ComponentB
