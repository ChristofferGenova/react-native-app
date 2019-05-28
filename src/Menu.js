import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from "./componentes/Simples";
import ParImpar from "./componentes/ParImpar";
import { Inverter, MegaSena } from "./componentes/Multi";

export default createDrawerNavigator({
    MegaSena: {
        screen: () => <MegaSena numeros={8}></MegaSena>,
        navigationOptions: { title: 'Mega Sena' }
    },
    Inverter: {
        screen: () => <Inverter texto='Christoffer'></Inverter>
    },
    ParImpar: {
        screen: () => <ParImpar numero={32}></ParImpar>,
        navigationOptions: { title: 'Par ou Ímpar' }
    },
    Simples: {
        screen: () => <Simples texto='Teste'></Simples>
    }
}, { drawerWidth: 300 })