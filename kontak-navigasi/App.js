import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListKontak from './components/ListKontak';
import DetailKontak from './components/DetailKontak';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListKontak">
        <Stack.Screen name="ListKontak" component={ListKontak} options={{ title: 'Daftar Kontak' }} />
        <Stack.Screen name="DetailKontak" component={DetailKontak} options={{ title: 'Detail Kontak' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}