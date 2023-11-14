import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginPage from '../pages/LoginPage';
import Sample from '../pages/Sample';

const Stack=createNativeStackNavigator();
const StackNavigation = () => {

  return (
    <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={LoginPage}/>
        <Stack.Screen name="Sample" component={Sample}/>

    </Stack.Navigator>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})