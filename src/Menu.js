import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from "./componentes/Simples"
import ParImpar from "./componentes/ParImpar"
import { Inverter, MegaSena } from "./componentes/Multi"
import Contador from './componentes/Contador'
import Plataformas from './componentes/Plataformas'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento'
import Avo from './componentes/ComunicacaoDireta'
import { TextoSincronizado } from './componentes/ComunicacaoIndireta'
import ListaFlex from './componentes/ListaFlex'

export default createDrawerNavigator(
  {
    ListaFlex: {
        screen: () => <ListaFlex></ListaFlex>,
        navigationOptions: { title: "Lista de Alunos" }
    },
    TextoSincronizado: {
      screen: () => <TextoSincronizado></TextoSincronizado>,
      navigationOptions: { title: "Comunicação Indireta Callback" }
    },
    Avo: {
      screen: () => <Avo nome="Jao" sobrenome="Silva" />
    },
    Evento: {
      screen: () => <Evento />,
      navigationOptions: { title: "Evento" }
    },
    ValidarProps: {
      screen: () => <ValidarProps ano={18} />,
      navigationOptions: { title: "Validar Propriedade" }
    },
    Plataforma: {
      screen: () => <Plataformas />,
      navigationOptions: { title: "Testar Notificação" }
    },
    Contador: {
      screen: () => <Contador />
    },
    MegaSena: {
      screen: () => <MegaSena numeros={8} />,
      navigationOptions: { title: "Mega Sena" }
    },
    Inverter: {
      screen: () => <Inverter texto="Christoffer" />
    },
    ParImpar: {
      screen: () => <ParImpar numero={32} />,
      navigationOptions: { title: "Par ou Ímpar" }
    },
    Simples: {
      screen: () => <Simples texto="Teste" />
    }
  },
  { drawerWidth: 300 }
);