import React from 'react'
import { View, Text } from 'react-native'

const fonte = { style: { fontSize: 30 } }

function filhoComProps(props) {
    return React.Children.map(props.children, 
        c => React.cloneElement(c, {...props, ...c.props}))
}

export const Filho = props => {
    return (
      <View>
        <Text {...fonte}>
          Filho: {props.nome} {props.sobrenome}
        </Text>
      </View>
    );
}

export const Pai = props => {
    return (
      <View>
        <Text {...fonte}>
          Pai: {props.nome} {props.sobrenome}
        </Text>
        {filhoComProps(props)}
      </View>
    );
}

export const Avo = props => {
    return(
        <View>
            <Text {...fonte}>
                Avô: {props.nome} {props.sobrenome}
            </Text>
            <Pai nome="André" sobrenome={props.sobrenome}>
                <Filho nome="Ana" />
                <Filho nome="Carlos" />
            </Pai>
            <Pai {...props} nome="Pedro">
                <Filho nome="Rebeca" />
                <Filho nome="Renato" />
            </Pai>
        </View>
    )
}
    

export default Avo