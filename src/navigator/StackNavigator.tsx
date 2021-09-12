import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { screen1 } from '../screens/screen1';
import { screen2 } from '../screens/screen2';
import { BotonCancelar } from '../components/BotonCancelar';
import { Alert, Button } from 'react-native';
import { BotonPagina } from '../components/BotonPagina';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
          backgroundColor: '#854BA1',
          height: 80
        },
        cardStyle: {
          backgroundColor: '#854BA1'
        },
        headerRight: () => (
          <BotonPagina/>
        ),
      }}
    >
      <Stack.Screen name="screen1" options={{ title: "" }} component={screen1} />
      <Stack.Screen name="screen2" options={{ title: "" }} component={screen2} />
    </Stack.Navigator >
  );
}