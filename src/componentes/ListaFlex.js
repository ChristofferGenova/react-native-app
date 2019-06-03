import React from 'react'
import { View, ScrollView, FlatList, Text } from 'react-native'

const alunos = [
    { id: 1, nome: 'Carlos', nota: 9.5 },
    { id: 2, nome: 'Arakaki', nota: 7.5 },
    { id: 3, nome: 'Rebeca', nota: 9.5 },
    { id: 4, nome: 'Tobias', nota: 9.5 },
    { id: 5, nome: 'Guilherme', nota: 9.5 },
    { id: 6, nome: 'Felipe', nota: 9.5 },
    { id: 7, nome: 'Diego', nota: 9.5 },
    { id: 8, nome: 'Paulo', nota: 9.5 },
    { id: 9, nome: 'Nicole', nota: 9.5 },
    { id: 11, nome: 'Oxito', nota: 9.5 },
    { id: 12, nome: 'Leandro', nota: 7.5 },
    { id: 13, nome: 'Leonardo', nota: 9.5 },
    { id: 14, nome: 'Uli', nota: 9.5 },
    { id: 15, nome: 'Lucas', nota: 9.5 },
    { id: 16, nome: 'Anderson', nota: 9.5 },
    { id: 17, nome: 'Israel', nota: 9.5 },
    { id: 18, nome: 'Everton', nota: 9.5 },
    { id: 19, nome: 'Nicole', nota: 9.5 },
]
1
const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#DDD',
    corderWidth: 0.5,
    borderColor: '#222'
}

export const Aluno = props => {
    return(
        <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text>
    </View>
    )
}

export default props => {
    const renderItem = ({item}) => {
        return(
            <Aluno {...item}></Aluno>
        )
    }

    return(
        <ScrollView>
            <FlatList data={alunos}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
            ></FlatList>
        </ScrollView>
    )
}