import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

import Padrao from '../estilo/Padrao'

const ValidarProps = props => {
    return (
        <Text style={Padrao.ex}>
            {props.label}
            {props.ano + 2000} 
        </Text>
    )
    
}

ValidarProps.defaultProps = {
    label: 'Ano: '
}

ValidarProps.propTypes = {
    ano: PropTypes.number.isRequired //Precisa ser numerico e campo obrigatorio
}

export default ValidarProps