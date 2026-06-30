import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import PantallaAcercaDe from './PantallaAcercaDe';
import PantallaDetalle from './PantallaDetalle';
import PantallaInicio from './PantallaInicio';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen
          name="Inicio"
          component={PantallaInicio}
          options={{ title: 'Inicio' }}
        />
        <Stack.Screen
          name="Detalle"
          component={PantallaDetalle}
          options={{ title: 'Informacion del Usuario' }}
        />
        <Stack.Screen
          name="AcercaDe"
          component={PantallaAcercaDe}
          options={{ title: 'Acerca de' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
