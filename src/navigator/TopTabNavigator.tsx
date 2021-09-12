
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';


import { informacion } from '../screens/informacion';
import { membresia } from '../screens/membresia';



const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: '#854BA1'
      }}
      screenOptions={{
        tabBarLabelStyle: { fontSize: 13, color: 'white', fontWeight: 'bold' },
        tabBarStyle: { backgroundColor: '#854BA1', },
        tabBarPressColor: '#B491C5',
        tabBarIndicatorStyle: {backgroundColor: 'white'}
      }}
      >
      <Tab.Screen name="información" component={informacion}/>
      <Tab.Screen name="membresia" component={membresia} />
    </Tab.Navigator>
  );
}