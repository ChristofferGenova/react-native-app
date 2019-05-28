import React from 'react'
import { Button, Alert, ToastAndroid, Platform } from 'react-native'

export default props => {
    //Verificar qual plataforma esta rodando
    const notificacao = msg => {
        if (Platform.OS === "android") {
          //Usar notificacao nativa do android
          ToastAndroid.show(msg, ToastAndroid.LONG) //tempo de exibicao
        } else {
            Alert.alert('Informação', msg) //Alert para IOS
        }
    }

    return(
        <Button title='Testar Plataforma' onPress={() => notificacao('Funcionando!')}></Button>
    )
}