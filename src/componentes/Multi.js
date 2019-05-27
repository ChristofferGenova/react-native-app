import React from 'react'
import { Text } from 'react-native'
import Padrao from '../estilo/Padrao'

//Se nao for um export default, precisa armazenar a funcao em uma const
export const Inverter = props => {
    const inv = props.texto.split('').reverse().join('')
    return(
        <Text style={Padrao.ex}>{inv}</Text>
    )
}

export const MegaSena = props => {
    const [min, max] = [1, 60]
    const numeros = Array(props.numeros || 6).fill(0) //Se não for passado nenhum numero, o array é zerado

    for(let i = 0; i < numeros.length; i++){
        let novo = 0
        //Enquanto for gerado numeros iguais
        while(numeros.includes(novo)){
            novo = Math.floor(Math.random() * (max - min + 1) + min)
        }
        numeros[i] = novo
    }

    numeros.sort((a, b) => a - b)
    return(
        <Text style={Padrao.ex}>{numeros.join(', ')}</Text>
    )
}