import React, { Component } from 'react'
import { View, StyleSheet } from "react-native"

//Importando componentes do projeto
import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import { Inverter, MegaSena } from './componentes/Multi'
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Simples texto='Testando Styles'></Simples>
        <ParImpar numero={20}/>
        <Inverter texto='Christoffer'></Inverter>
        <MegaSena numeros={6}></MegaSena>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})