import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator()

import UsersList from './screens/UserList'
import CreateUserScreen from './screens/CreateUserScreen'
import UserDetailScreen from './screens/UserDetailScreen'

function myStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen component={UsersList} />
      <Stack.Screen component={CreateUserScreen} />
      <Stack.Screen component={UserDetailScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>

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
