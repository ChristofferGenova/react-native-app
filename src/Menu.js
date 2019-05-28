import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from "./componentes/Simples"
import ParImpar from "./componentes/ParImpar"
import { Inverter, MegaSena } from "./componentes/Multi"
import Contador from './componentes/Contador'
import Plataformas from './componentes/Plataformas'

export default createDrawerNavigator({
    Plataforma: {
        screen: () => <Plataformas></Plataformas>,
        navigationOptions: { title: 'Testar Notificação' }
    },    
    Contador: {
        screen: () => <Contador></Contador>
    },
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