import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator()

import UsersList from './screens/UserList'
import CreateUserScreen from './screens/CreateUserScreen'
import UserDetailScreen from './screens/UserDetailScreen'

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="CreateUserScreen" component={CreateUserScreen} options={{title: 'Crear nuevo usuario'}}/>
      <Stack.Screen name="UserList" component={UsersList} options={{title: 'Lista de usuarios'}} />
      <Stack.Screen name="UserDetailScreen" component={UserDetailScreen} options={{title: 'Detalles de usuario'}}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
