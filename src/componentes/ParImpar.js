import React from 'react'
import { View, Text } from 'react-native'
import Padrao from '../estilo/Padrao'

function parOuImpar(num){
    //Operador ternário
    const resultado = num % 2 == 0 ? 'Par' : 'Impar'
    return <Text style={Padrao.ex}>{resultado}</Text>
}

export default props => {
    return(
        <View>
            {parOuImpar(props.numero)}
            {/* {
                //Operador ternário
                props.numero % 2 == 0
                ? <Text style={Padrao.ex}>Par</Text> //Se for par renderiza um texto escriot Par
                : <Text style={Padrao.ex}>Impar</Text> //Senão renderiza um texto escrito Impar
            } */}
        </View>
    )
    
}