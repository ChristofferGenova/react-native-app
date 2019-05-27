import React, { Component } from 'react';
import { View, StyleSheet } from "react-native";

//Importando componentes do projeto
import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Simples texto='Testando Styles'></Simples>
        <ParImpar numero={20}/>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});